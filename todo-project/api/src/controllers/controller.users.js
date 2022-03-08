
import Users from '../models/model.users';

export async function createUser(req, res) {
  const { typeUser, dateRegistration, assignedUser, status, idUser } = req.body;
  try {
    const newUser = await Users.create(
      {
        typeUser,
        dateRegistration,
        assignedUser,
        status,
        idUser
      },
      {
        fields: [
          'typeUser',
          'dateRegistration',
          'assignedUser',
          'status',
          'idUser'
        ]
      }
    );
    if (newUser) {
      res.status(201).json({
        status: 'User created successfully',
        data: { newUser }
      });
    }
  } catch (error) {
    res.status(500).json({
      status: 'failed operation',
      data: {}
    });
  }
}

export async function getAllUsers(req, res) {
  try {
    const users = await Users.findAll();
    res.status(200).json({
      statu: 'success',
      data: { users }
    });
  } catch (error) {
    res.status(500).json({
      statu: 'wrong access',
      data: {}
    });
  }
}

export async function getOneUser(req, res) {
  const { id } = req.params;
  try {
    const user = await Users.findOne({
      where: { id }
    });
    res.status(200).json({
      statu: 'success',
      data: { user }
    });
  } catch (error) {
    res.status(500).json({
      statu: 'wrong access',
      data: {}
    });
  }
}

export async function updateUser(req, res) {
  const { id } = req.params;
  const { typeUser, dateRegistration, assignedUser, status, idUser } = req.body;
  try {
    const user = await Users.findAll({
      attributes: [
        'id',
        'typeUser',
        'dateRegistration',
        'assignedUser',
        'status',
        'idUser'
      ],
      where: { id }
    });
    if (user.length > 0) {
      user.forEach(async (user) => {
        await user.update({
          typeUser,
          dateRegistration,
          assignedUser,
          status,
          idUser
        });
      });
    }
    return res.status(201).json({
      status: 'User Updated successfully',
      data: { user }
    });
  } catch (error) {
    res.status(500).json({
      status: 'failed operation',
      data: {}
    });
  }
}

export async function getUsersByPerson(req, res) {
  const { idUser } = req.params;
  try {
    const users = await Users.findAll({
      attributes: [
        'id',
        'typeUser',
        'dateRegistration',
        'assignedUser',
        'status',
        'idUser'
      ],
      where: { idUser }
    });
    res.status(200).json({
      status: 'success',
      data: { users }
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'User not found'
    });
  }
}
