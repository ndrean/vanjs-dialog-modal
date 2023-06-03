export const header = ({ van, classes }) => {
  const { h1, header } = van.tags;
  return function Header() {
    return header(h1({ class: classes.h1 }));
  };
};
