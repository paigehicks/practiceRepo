export default() => `
<form id="register" method="POST" action="">
<div>
  <label for="username">Username:</label>
  <input type="text" name="username" id="username" placeholder="url">
</div>
<div>
  <label for="password">Password:</label>
  <input type="text" name="password" id="password">
</div>
<div>
  <label for="email">Email:</label>
</div>
<input type="submit" name="register" value="Register">
</form>`;
