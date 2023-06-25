const pmg = require('pmg');
const { sendMsg } = require('../notification/discord');
const PMGControl = (appName, type) => {
	var result;
	if (typeof type === 'string') {
		switch (type) {
			case 'stop':
				pmg.stop(appName, (err, processDescription) => {
					if (err) return (result = err);
					else result = `${processDescription[0].name} ${processDescription[0].status}`;
					sendMsg(
						`serverInfo success ${processDescription[0].name} ${processDescription[0].status}`,
					);
				});
				break;
			case 'start':
				pmg.start(appName, (err, processDescription) => {
					if (err) return (result = err);
					else result = processDescription;
					sendMsg(
						`serverInfo success ${processDescription[0].name} ${processDescription[0].status}`,
					);
				});
				break;
			case 'restart':
				pmg.restart(appName, (err, processDescription) => {
					if (err) return (result = err);
					else result = `${processDescription[0].name} ${processDescription[0].status}`;
					sendMsg(
						`serverInfo success ${processDescription[0].name} ${processDescription[0].status}`,
					);
				});
				break;
			case 'delete':
				pmg.delete(appName, (err, processDescription) => {
					if (err) return (result = err);
					else result = `${processDescription[0].name} ${processDescription[0].status}`;
					sendMsg(
						`serverInfo success ${processDescription[0].name} ${processDescription[0].status}`,
					);
				});
				break;
			default:
				break;
		}
	}
	return result;
};
module.exports = PMGControl;
