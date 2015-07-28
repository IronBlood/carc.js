#!/usr/bin/env node

var data = "",
	cityData = { Provinces: [], p_ids: [],  Province: {} };

var fs = require('fs');

function parse_data(line_data) {
	var a = line_data.split(',');

	if(a[0].substring(2) === "0000") {
		// 省级单元
		var p_id = a[0].substring(0, 2);

		cityData.Provinces.push(a[1]);
		cityData.p_ids.push(p_id);
		cityData.Province[p_id] = {
			Code: a[0],
			Cities: [],
			c_ids: [],
			City: {}
		};
	} else if(a[0].substring(4) === "00") {
		// 市级单元
		var p_id = a[0].substring(0, 2),
			c_id = a[0].substring(0, 4),
			province = cityData.Province[p_id];	// 数据里省于市之前出现，所以此处不会为空

		province.Cities.push(a[1]);
		province.c_ids.push(c_id);
		province.City[c_id] = {
			Code: a[0],
			Countries: [],
			e_ids: []
		};
	} else if(line_data.length > 0) {
		// 县级单元
		var p_id = a[0].substring(0, 2),
			c_id = a[0].substring(0, 4),
			city = cityData.Province[p_id].City[c_id];

		city.Countries.push(a[1]);
		city.e_ids.push(a[0]);
	}
}

fs.readFile(process.argv[2], { encoding: "utf-8" }, function(err, data) {
	var line_datas = data.split('\n'),
		length = line_datas.length;

	for(var i=0; i<length; i++) {
		parse_data(line_datas[i]);
	}

	fs.readFile("base.js", { encoding: "utf-8" }, function(e1, js) {
		console.log(js);

		console.log("Carc.data = " + JSON.stringify(cityData));
	});
});
