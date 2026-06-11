// Inlined as a data URI: a relative asset URL breaks when the studio is
// embedded in the sanity.io dashboard, which serves from its own origin
import logo from './logo.png?inline';

export const Logo = () => (
  <img
    src={logo}
    alt="Sally Payne"
    width={25}
    height={25}
  />
);
