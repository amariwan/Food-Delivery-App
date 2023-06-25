module.exports = (app) => {
	const indexRouter = require('./index');
	app.use('/', indexRouter);
	//-------------------------------------------------------
	const authRouter = require('./auth');
	app.use('/auth', authRouter);
	//-------------------------------------------------------
	const registerSensor = require('./registerSensor');
	app.use('/registerSensor', registerSensor);
	//-------------------------------------------------------
	const getSensorData = require('./getSensorData');
	app.use('/getDataSensor', getSensorData);
};
