  const keys = [];
  const secret = 'cafeara';

  window.addEventListener('keyup', (e) => {
    keys.push(e.key);
    keys.splice(-secret.length - 1, keys.length - secret.length);
    if (keys.join('').includes(secret)){
      cornify_add();
    }
  })
