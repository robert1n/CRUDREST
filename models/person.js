module.exports = (sequelize, DataTypes) => {
    const Person = sequelize.define('Person', {
      nome: DataTypes.STRING,
      email: DataTypes.STRING,
      telefone: DataTypes.STRING,
      data_nascimento: DataTypes.DATE,
      cpf: DataTypes.STRING,
      status: DataTypes.ENUM('ativo', 'inativo')
    });
  
    return Person;
  };
  