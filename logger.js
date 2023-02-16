import fs from 'fs';

export const Log = async (logs) => {
	try {
        var date = new Date().toISOString().slice(0, 10);
        logs = date+' - '+logs+"\r\n"
		fs.appendFile(`debug.log`, logs, (errsx) => {
			if (errsx) console.log(errsx);
		});
	} catch (errs) {}
};

