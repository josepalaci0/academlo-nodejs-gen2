import Person from '../models/model.person';

export async function getAllPerson(req, res) {
  try {
    const person = await Person.findAll();
    res.status(200).json({
      statu: 'success',
      data: { person }
    });
  } catch (error) {
    res.status(500).json({
      statu: 'wrong access',
      data: {}
    });
  }
}

export async function createPerson(req, res) {
  const { lastName, firstName, address, city } = req.body;
  try {
    const newPerson = await Person.create(
      {
        lastName,
        firstName,
        address,
        city
      },
      { fields: ['lastName', 'firstName', 'address', 'city'] }
    );

    if (newPerson) {
      res.status(201).json({
        status: 'Person created successfully',
        data: { newPerson }
      });
    }
  } catch (error) {
    res.status(500).json({
      status: 'failed operation',
      data: {}
    });
  }
}

export async function getOnePerson(req, res) {
  const { id } = req.params;
  try {
    const person = await Person.findOne({
      where: { id }
    });
    res.status(200).json({
      statu: 'success',
      data: { person }
    });
  } catch (error) {
    res.status(500).json({
      statu: 'wrong access',
      data: {}
    });
  }
}

export async function updatePerson(req, res) {
  const { id } = req.params;
  const { lastName, firstName, address, city } = req.body;
  try {
    const person = await Person.findAll({
      attributes: ['id', 'lastName', 'firstName', 'address', 'city'],
      where: { id }
    });
    if (person.length > 0) {
      person.forEach(async (person) => {
        await person.update({
          lastName,
          firstName,
          address,
          city
        });
      });
    }
    return res.status(201).json({
      status: 'Person Updated successfully',
      data: { person }
    });
  } catch (error) {
    res.status(500).json({
      status: 'failed operation',
      data: {}
    });
  }
}
