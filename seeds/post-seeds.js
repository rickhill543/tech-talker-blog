const { Post } = require('../models');

const postdata = [
  {
    title: 'Fusion Future',
    post_text: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    user_id: 1
  },
  {
    title: 'Room Temperature Superconductors',
    post_text: 'Curabitur in libero ut massa volutpat convallis. Curabitur in libero ut massa volutpat convallis. Curabitur in libero ut massa volutpat convallis.',
    user_id: 3
  },
  {
    title: 'Graphene Greatness',
    post_text: 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.',
    user_id: 4
  },
  {
    title: 'QPU 4 U',
    post_text: 'Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    user_id: 2
  },
  {
    title: 'Solid State Battery Breakthrough',
    post_text: 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    user_id: 1
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
