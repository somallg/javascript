var mapFunction = function() {
	emit(this, this.PictureList);
}

var reduceFunction = function(doc, pictureList) {
	if (pictureList.length == 0) {
		return doc;
	} else {
		pictureList.forEach(function(index, item) {
			if (item.dpInd === 'Y') {
				
			}
		});
	}
}

db.users.mapReduce(
	function() {	
		emit(this._id, { firstName: this.firstName, gender: this.gender, PictureList: this.PictureList });
	},
	
	function(key, value) {
		return value;
	},
	
	{
		query: { gender: "F" },
		out: "users_female"
	}
);