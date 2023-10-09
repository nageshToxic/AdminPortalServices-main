const Sequelize =require('sequelize')

module.exports = (sequelize, Sequelize) => {
	const Store = sequelize.define('stores', {
        store_id: {
			type: Sequelize.BIGINT,
			autoIncrement: true,
			primaryKey: true,
			field: 'store_id'
		},
		retailer_id: {
			type: Sequelize.BIGINT,
			primaryKey: false,
			field: 'retailer_id'
		},
        name: {
            type: Sequelize.TEXT,
            primaryKey: false,
            field: 'name'
        },
        tin: {
            type: Sequelize.BIGINT,
            primaryKey: false,
            field: 'tin'
        },
        address: {
            type: Sequelize.TEXT,
            primaryKey: false,
            field: 'address'
        },
        city: {
            type: Sequelize.TEXT,
            primaryKey: false,
            field: 'city'
        },
        state: {
            type: Sequelize.TEXT,
            primaryKey: false,
            field: 'state'
        },
        pincode: {
            type: Sequelize.INTEGER,
            primaryKey: false,
            field: 'pincode'
        },
        is_disabled: {
            type: Sequelize.BOOLEAN,
            primaryKey: false,
            field: 'is_disabled'
        },
        salesperson_number: {
            type: Sequelize.BIGINT,
            primaryKey: false,
            field: 'salesperson_number'
        },
        created_at: {
            type: Sequelize.DATE,
            primaryKey: false,
            field: 'salesperson_number'
        },
        updated_at: {
            type: Sequelize.DATE,
            primaryKey: false,
            field: 'salesperson_number'
        },
        phone: {
            type: Sequelize.BIGINT,
            primaryKey: false,
            field: 'phone'
        },
        store_type: {
            type: Sequelize.INTEGER,
            primaryKey: false,
            field: 'store_type'
        },
        license_key: {
            type: Sequelize.TEXT,
            primaryKey: false,
            field: 'license_key'
        },
        otp: {
            type: Sequelize.INTEGER,
            primaryKey: false,
            field: 'otp'
        },
        sms_count: {
            type: Sequelize.INTEGER,
            primaryKey: false,
            field: 'sms_count'
        },
        is_item_master: {
            type: Sequelize.BOOLEAN,
            primaryKey: false,
            field: 'is_item_master'
        },
        device_type: {
            type: Sequelize.TEXT,
            primaryKey: false,
            field: 'device_type'
        },
		
	},
	{
			tableName: 'stores',
			timestamps: true,
			created_at: true,
			updated_at: true,
			deletedAt: false,
			underscored: true,
			freezeTableName: true,
			version: false,
			indexes: [
				{fields: ['store_id'], unique: false},
				{fields: ['phone'], unique: false},
			]

	});

	return Store;
}