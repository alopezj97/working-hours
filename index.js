
const hours_to_work = 8;
const minutes_to_work = 30;
const time_to_work_in_minutes = hours_to_work * 60 + minutes_to_work;

const worked_time = process.argv.slice(2)[0]; // worked time in h:mm format

get_output(worked_time);

function get_output(worked_time) {
	if (worked_time){
		const minutes_worked =
			parseInt(worked_time.slice(0, worked_time.indexOf(':'))) * 60
			+
			parseInt(worked_time.slice(worked_time.indexOf(':')+1))
		;
		const minutes_left = time_to_work_in_minutes - minutes_worked;

		const now = new Date();
		const output = new Date(now.getTime()+minutes_left*60*1000).toLocaleTimeString();
		console.log(output);

	} else {
		console.log('How long have you been working for today?');
	}
}
