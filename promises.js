console.log("start");

function imp(userName, cb) {
  setTimeout(() => {
    cb(`weclcome back ${userName}`);
  }, 1000);
}
function likev(video, cb) {
  setTimeout(() => {
    cb(`you lked ${video}`);
  }, 1000);
}

console.log(
  imp("sanskar", function (message) {
    console.log(message);
    likev("jsKing", function (video) {
      console.log(video);
    });
  })
);

/* A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

It has three states:

Pending – initial state, operation not completed yet

Fulfilled – operation completed successfully → returns a value

Rejected – operation failed → returns an error */

const sub = new Promise((resolve, reject) => {
  setTimeout(() => {
    const result = true;

    if (result) resolve("happy");
    else reject("sad");
  }, 2000);
});

sub
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
