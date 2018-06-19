const html = require("html-template-tag");
const layout = require("./layout");

module.exports = () => layout(html`
  <h3>Search by Tags</h3>
  <hr>
	<form method="GET" action="/wiki/lookup">

    <div class="form-group">
      <label for="title" class="col-sm-2 control-label">Tags</label>
      <div class="col-sm-10">
        <input name="tags" type="text" class="form-control"/>
      </div>
    </div>

    <div class="col-sm-offset-2 col-sm-10">
      <button type="submit" class="btn btn-primary">submit</button>
    </div>

  </form>
`);
