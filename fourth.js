const prompt = require('prompt-sync')();
n=prompt("enter the value");
n=Number(n);
function odd_num_check(n)
{
	for(i=1;i<=n;i++)
	{
		if(i%2!=0)
		{
			console.log("%d is an odd number",i);
		}
	}
}
odd_num_check(n)	;