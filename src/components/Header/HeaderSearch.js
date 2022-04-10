import Input from "./../shared/Input";
import { useState } from "react";
import { useHistory } from 'react-router-dom'
function HeaderSearch() {
  const history = useHistory();

  const [queryString, setQueyString] = useState("");
  function handleOnChange(e) {
       setQueyString(e.target.value)
  }
  function handleSubmit(e) {
    e.preventDefault();
    if(!queryString) {
      return
    }
    const queryURI = encodeURIComponent(queryString)   //tránh chuyền vào khoản trắng
      history.push('/search?q=' + queryURI)
  }
  return (
    <div className="tcl-col-4">
      {/* Header Search */}
      <form  onSubmit={handleSubmit}>
        <Input
          type="search"
          placeholder="vui lòng nhập giá trị"
          value={queryString}
          onChange={handleOnChange}
        />
      </form>
    </div>
  );
}

export default HeaderSearch;
