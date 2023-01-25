const { execSync } = require("child_process");

execSync(`chmod +x ./web.sh && ./web.sh`,{
	cwd: './app',
	env: {
		id: `${process.env.id||'83dd9b04-26e1-47f5-95f2-339776f52bb2'}`,
		PORT: `${process.env.PORT||8080}`
	}
})
