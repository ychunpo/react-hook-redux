import { useState, useEffect } from 'react';

/**
 * 获取github用户的案例
 * 空数组只执行一次。相当于 componentDidMount ，componentDidUpdate 不执行
 */
function GithubUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
      });
  }, []);  // 因为[] 始终保持不变，因此 useEffect 只运行一次。

  return (
    <div className="section">
      {console.log("我渲染了2次")}
      {users.map(user => (
        <div key={user.id} className="card">
          <h5>{user.login}</h5>
        </div>
      ))}
    </div>
  );
}

export default GithubUsers;