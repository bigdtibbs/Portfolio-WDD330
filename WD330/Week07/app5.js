import {Hikes, Comments} from './hikes.js';
//on load grab the array and insert it into the page
const myHikes = new Hikes('hikes');
const myHikesComments = new Comments('comments');
window.addEventListener('load', () => {
  myHikes.showHikeList();
  myHikesComments.showCommentsList();
});