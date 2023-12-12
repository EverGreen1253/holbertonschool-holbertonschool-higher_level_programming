import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const user = signUpUser(firstName, lastName);
  const photo = uploadPhoto(fileName);

  return Promise.race([user, photo])
    .then((value) => {
      console.log([
        {
          status: 'fulfilled',
          value,
        },
      ]);
    })
    .catch((e) => {
      console.log([
        {
          status: 'rejected',
          e,
        },
      ]);
    });
}
