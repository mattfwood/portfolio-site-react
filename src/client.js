// import createClient directly
import {createClient} from 'contentful'
const client = createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: 'wetfygr1eqh0',
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: '60cbad148b9e4801a76825865de8ec2a7f7f33582aff8c1033814675300e2f25'
});

export default client;
