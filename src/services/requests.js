export const authRequest = base => {
  return new Promise((resolve, reject) => {
    fetch('https://api.github.com/user', {
      headers: {
        Authorization: `Basic ${base}`,
      },
    }).then(response => {
      if (response.status === 200) {
        resolve(response.status);
      } else if (response.status === 401) {
        reject('Incorrect login or password');
      } else {
        reject(response.status);
      }
    });
  });
};

export const getRepos = (search, count, sortBy) => {
  const sort = sortBy === 1 ? '&sort=stars' : sortBy === 2 ? '&sort=forks' : '';
  return new Promise((resolve, reject) => {
    fetch(
      `https://api.github.com/search/repositories?q=${search}${sort}&per_page=${count}`,
    ).then(response => {
      if (response.status === 200) {
        response.json().then(body => {
          resolve({ ...body });
        });
      } else {
        reject(response.status);
      }
    });
  });
};
