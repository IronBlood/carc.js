/*
	This program is free software: you can redistribute it and/or modify
	it under the terms of the GNU General Public License as published by
	the Free Software Foundation, either version 3 of the License, or
	(at your option) any later version.

	This program is distributed in the hope that it will be useful,
	but WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	GNU General Public License for more details.

	You should have received a copy of the GNU General Public License
	along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

var Carc = {
	data: null,
	getProvinces: function() {
		return this.data.Provinces;
	},

	getProvinceIDs: function() {
		return this.data.p_ids;
	},

	getCities: function(province_id) {
		return this.data.Province[province_id].Cities;
	},

	getCityIDs: function(province_id) {
		return this.data.Province[province_id].c_ids;
	}

	getCountries: function(province_id, city_id) {
		return this.data.Province[province_id].City[city_id].Countries;
	}

	getCountryCodes: function(province_id, city_id) {
		return this.data.Province[province_id].City[city_id].e_ids;
	},
};
