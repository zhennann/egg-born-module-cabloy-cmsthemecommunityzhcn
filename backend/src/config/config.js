// eslint-disable-next-line
module.exports = appInfo => {
  const config = {};

  // theme
  config.theme = {
    base: {
      title: 'Cabloy',
      subTitle: '顶级Javascript全栈业务开发框架，基于EggJS & VueJS.',
    },
    _theme: {
      name: 'cabloy-cmsthemecommunityzhcn',
      url: 'https://github.com/zhennann/egg-born-module-cabloy-cmsthemecommunityzhcn',
    },
    _project: {
      description: '顶级Javascript全栈业务开发框架，基于EggJS & VueJS.',
      buttons: [
        { title: 'Github', color: 'primary', url: 'https://github.com/zhennann/cabloy' },
        { title: '文档', color: 'primary', url: 'articles/introduce.html' },
        { title: '在线演示', url: 'https://admin.cabloy.org' },
      ],
      features: [
        { title: 'PC = MOBILE + PAD', description: '\'移动优先\' 策略，并完美匹配PC布局' },
        { title: '业务模块化', description: '业务组件与逻辑被组织为模块，有利于功能内聚与重用' },
        { title: '前后端分离', description: '前后端分离，有利于充分解构' },
        { title: '核心业务模块', description: '提供大量核心业务模块，以便进行快速的业务开发，如用户、角色、权限、菜单，等等' },
      ],
      columns: 4,
    },
  };

  return config;
};
