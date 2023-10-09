const Sequelize =require('sequelize')

module.exports = (sequelize, Sequelize) => {
	const licenceKey = sequelize.define('license_keys', {
        id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true,
			field: 'id'
		},
		l_key: {
			type: Sequelize.STRING,
			primaryKey: false,
			field: 'l_key'
		},
        vendor: {
            type: Sequelize.TEXT,
            primaryKey: false,
            field: 'vendor'
        },
        status: {
            type: Sequelize.TEXT,
            primaryKey: false,
            field: 'status'
        },
        created_by: {
            type: Sequelize.TEXT,
            primaryKey: false,
            field: 'created_by'
        },
        updated_by: {
            type: Sequelize.TEXT,
            primaryKey: false,
            field: 'updated_by'
        },
        created_at: {
            type: Sequelize.DATE,
            primaryKey: false,
            field: 'created_at'
        },
        updated_at: {
            type: Sequelize.DATE,
            primaryKey: false,
            field: 'updated_at'
        },
	},
	{
			tableName: 'license_keys',
			timestamps: true,
			created_at: true,
			updated_at: true,
			underscored: true,
			freezeTableName: true,
			version: false,
			indexes: [
				{fields: ['id'], unique: false},
				{fields: ['l_key'], unique: true},
			]

	});

	return licenceKey;
}