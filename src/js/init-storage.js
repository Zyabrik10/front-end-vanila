import { storage } from '../storage/storage';

const userName = document.querySelector('.user-name');

if (storage.isLogedIn) {
  storage.user.username = 'Alex';
  userName.innerHTML = storage.user.username;
} else {
  storage.user.username = 'not loged in';
  userName.innerHTML = storage.user.username;
}
