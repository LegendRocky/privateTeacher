var Service = {
  host:'http://127.0.0.1:3000',
  login: '/user/login',
  reg: '/user/reg',
  loginByToken: '/user/login/token',
  getUser: '/user/get',
  createUser: '/user/create',
  getMessage: '/message/get',
  addMessage: '/message/add',
  updatePassword: '/user/password/update',
  deleteUser: '/user/delete',
  findTeacher: '/user/findteacher',
  findTeacherDetail: '/user/findteacher/detail'
};

module.exports = Service;