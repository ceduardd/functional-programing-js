function Header(text) {
  let h1 = document.createElement('h1');
  h1.innerText = text;
  document.body.appendChild(h1);
}

Header('Header() caused side effects');

// React use purity functions

const Header = (props) => <h1>{props.title}</h1>;

/* Recomendations
- The function should take in at least one argument.
- The function should return a value or another function.
- The function should not change or mutate any of its arguments. */
