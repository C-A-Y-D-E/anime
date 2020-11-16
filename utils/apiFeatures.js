class ApiFeatures {
  constructor(query, queryObj) {
    this.query = query;
    this.queryObj = queryObj;
  }

  search() {
    if (this.queryObj.search) {
      this.query = this.query.find({
        title: { $regex: `${this.queryObj.search}`, $options: "i" },
      });
    }
    return this;
  }

  sort() {
    if (this.queryObj.sort) {
      const sortList = this.queryObj.sort.split(",").join(" ");
      this.query = this.query.sort(sortList);
    }
    return this;
  }

  fields() {
    if (this.queryObj.fields) {
      const fields = this.queryObj.fields.split("/").join(" ");
      this.query = this.query.select(fields);
    }
    return this;
  }

  paginate() {
    const limit = this.queryObj.limit * 1 || 100;
    const page = this.queryObj.page * 1 || 1;
    const skip = (page - 1) * limit;
    this.query = this.query.skip(skip).limit(limit);
    return this;
  }
}

module.exports = ApiFeatures;
