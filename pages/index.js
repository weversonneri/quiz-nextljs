import Head from 'next/head';
import db from '../db.json';
import { useRouter } from 'next/router';


import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizContainer from '../src/components/QuizContainer';
import Button from '../src/components/Button';
import Input from '../src/components/Input';


export default function Home() {
  
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>{db.title}</title>
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
            <form onSubmit={function (event) {
              event.preventDefault();
              router.push(`/quiz?name=${name}`);
              console.log("mandando");
            }}>
              <Input 
              name="nomeDoUsuario"
              onChange={(event) => setName(event.target.value)}
              placeholder="Digite seu nome" />
              <Button type="submit" disabled={name.length === 0 }>
                {`Jogar ${name}`}
              </Button>
            </form>
            <p>Lorem...</p>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <h1>sa</h1>
            <p>Lorem...</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner />
    </QuizBackground>
  );
}
