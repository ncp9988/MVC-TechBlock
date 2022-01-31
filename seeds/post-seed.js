const { Post } = require('../models');

const postdata = [
  
  {
    title: 'In hac habitasse platea dictumst.',
    post_content: 'Ajddidi cjsusuus dhudud dhfddfdj jdfhdhdjjdjd djjwuwuwuwi sjsjsiiqiiqiqiq aakoqudurte aooaoooaoaooaud isiidjieiweiwiei',
    user_id: 2
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_content: 'Ajddidi cjsusuus dhudud dhfddfdj jdfhdhdjjdjd djjwuwuwuwi sjsjsiiqiiqiqiq aakoqudurte aooaoooaoaooaud isiidjieiweiwiei',
    user_id: 3
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_content: 'Ajddidi cjsusuus dhudud dhfddfdj jdfhdhdjjdjd djjwuwuwuwi sjsjsiiqiiqiqiq aakoqudurte aooaoooaoaooaud isiidjieiweiwiei',
    user_id: 3
  },
  {
    title: 'Nulla tellus.',
    post_content: 'Ajddidi cjsusuus dhudud dhfddfdj jdfhdhdjjdjd djjwuwuwuwi sjsjsiiqiiqiqiq aakoqudurte aooaoooaoaooaud ',
    user_id: 1
  },
  {
    title: 'Nulla tellus.',
    post_content: 'Ajddidi cjsusuus dhudud dhfddfdj jdfhdhdjjdjd djjwuwuwuwi sjsjsiiqiiqiqiq aakoqudurte aooaoooaoaooaud ',
    user_id: 2
  },
  {
    title: 'Nulla tellus.',
    post_content: 'Ajddidi cjsusuus dhudud dhfddfdj jdfhdhdjjdjd djjwuwuwuwi sjsjsiiqiiqiqiq aakoqudurte aooaoooaoaooaud ',
    user_id: 3
  },
  {
    title: 'Nulla tellus.',
    post_content: 'Ajddidi cjsusuus dhudud dhfddfdj jdfhdhdjjdjd djjwuwuwuwi sjsjsiiqiiqiqiq aakoqudurte aooaoooaoaooaud ',
    user_id: 1
  },
  {
    title: 'Nulla tellus.',
    post_content: 'Ajddidi cjsusuus dhudud dhfddfdj jdfhdhdjjdjd djjwuwuwuwi sjsjsiiqiiqiqiq aakoqudurte aooaoooaoaooaud ',
    user_id: 2
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
