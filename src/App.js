import { BrowserRouter, Route, useParams } from "react-router-dom";
import './App.scss';
import Header from './components/header/Header'
import Banniere from './components/banniere/Banniere'
import TextIntro from './components/TextIntro'
import MeilleuresVentes from './components/MeilleuresVentes'
import BannieresLivraisonStores from './components/banniere/BannieresLivraisonStores'
import MarquesAndDerniersProduits from './components/MarquesAndDerniersProduits'
import BanniereIconsGarantiesLivraisons from './components/banniere/BanniereIconsGarantiesLivraisons'
import ArticlesBlog from './components/blog/ArticlesBlog'
import BanniereBleu from './components/banniere/BanniereBleu'
import BanniereBlackAvantFooter from './components/banniere/BanniereBlackAvantFooter'
import Footer from './components/footer/Footer'
import FicheProduit from './components/FicheProduit'
// import Signup from './components/signup/Signup'
// import Login from './components/signup/Login'
// import Dashboard from './components/signup/Dashboard'
import PrivateRoute from './components/signup/PrivateRoute'
// import ForgotPassword from './components/signup/ForgotPassword'
// import UpdateProfile from './components/signup/UpdateProfile'
// import ConnexionCompte from './components/signup/ConnexionCompte'
import AccountProfil from './components/signup/AccountProfil'
import CreateAccount from './components/signup/CreateAccount'
// import Modal from './components/modal/Modal'


import InstrumentsList from './components/instruments/InstrumentsList'
// import { Container } from "react-bootstrap";
import { AuthProvider } from "./context/AuthContext";
import ChatbotButton from "./components/button/ChatbotButton";


// https://dev.to/yuribenjamin/how-to-deploy-react-app-in-github-pages-2a1f

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="main-route-place">
          <Route exact path="/" component={Home} />
          <Route exact path="/batteries" component={BatteriesList} />
          <Route exact path="/batteries/batterie:num" component={Batterie} />
          <Route exact path="/claviers" component={ClaviersList} />
          <Route exact path="/claviers/clavier:num" component={Clavier} />
          <Route exact path="/guitares" component={GuitaresList} />
          <Route exact path="/guitares/guitare:num" component={Guitare} />
          <Route exact path="/effets-guitares" component={EffetsGuitareList} />
          <Route exact path="/effets-guitares/effet-guitare:num" component={EffetGuitare} />
          {/* <Route exact path="/signup" component={SignupPage} /> */}
          {/* <Route exact path="/login" component={LoginPage} /> */}
          {/* <Route exact path="/forgot-password" component={ForgotPassword} /> */}
          {/* <Route exact path="/connexion-compte" component={ConnexionCompte} /> */}
          <PrivateRoute exact path="/account-profil" component={GestionProfil} />
          <Route exact path="/create-account:email" component={CreerNouveauCompte} />
          {/* <PrivateRoute exact path="/dashboard" component={Dashboard} /> */}
          {/* <PrivateRoute exact path="/update-profile" component={UpdateProfile} /> */}
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

function Home() {
  return (
    <>
      <Header />
      <ChatbotButton />
      {/* <Modal /> */}
      <Banniere />
      <TextIntro />
      <MeilleuresVentes />

      <BanniereBleu />
      <BannieresLivraisonStores />
      <MarquesAndDerniersProduits />
      <BanniereIconsGarantiesLivraisons />
      <ArticlesBlog />
      <div className="hide-on-small-only">
        <BanniereBleu texte={<h2><b>SATISFAIT OU REMBOURSÉ !</b> VOUS AVEZ 30 JOURS POUR RETOURNER VOTRE COMMANDE.</h2>} />
      </div>
      <BanniereBlackAvantFooter />
      <Footer />
    </>
  );
}

// LISTE DES INSTRUMENTS D'UNE CATEGORIE

function BatteriesList() {
  return (
    <>
      <Header />
      <ChatbotButton />
      <InstrumentsList instruments="batteries" />
      <BanniereBleu texte={<h2><b>SATISFAIT OU REMBOURSÉ !</b> VOUS AVEZ 30 JOURS POUR RETOURNER VOTRE COMMANDE.</h2>} />
      <BanniereBlackAvantFooter />
      <Footer />
    </>
  );
}

function ClaviersList() {
  return (
    <>
      <Header />
      <ChatbotButton />
      <InstrumentsList instruments="claviers" />
      <BanniereBleu texte={<h2><b>SATISFAIT OU REMBOURSÉ !</b> VOUS AVEZ 30 JOURS POUR RETOURNER VOTRE COMMANDE.</h2>} />
      <BanniereBlackAvantFooter />
      <Footer />
    </>
  );
}

function GuitaresList() {
  return (
    <>
      <Header />
      <ChatbotButton />
      <InstrumentsList instruments="guitares" />
      <BanniereBleu texte={<h2><b>SATISFAIT OU REMBOURSÉ !</b> VOUS AVEZ 30 JOURS POUR RETOURNER VOTRE COMMANDE.</h2>} />
      <BanniereBlackAvantFooter />
      <Footer />
    </>
  );
}

function EffetsGuitareList() {
  return (
    <>
      <Header />
      <ChatbotButton />
      <InstrumentsList instruments="effets-guitare" />
      <BanniereBleu texte={<h2><b>SATISFAIT OU REMBOURSÉ !</b> VOUS AVEZ 30 JOURS POUR RETOURNER VOTRE COMMANDE.</h2>} />
      <BanniereBlackAvantFooter />
      <Footer />
    </>
  );
}


// FICHE PRODUIT INSTRUMENT INDIVIDUEL

function Batterie() {

  let { num } = useParams();
  return (
    <>
      <Header />
      <ChatbotButton />
      <FicheProduit num={num} categorie="batterie" />
      <BanniereBleu texte={<h2><b>SATISFAIT OU REMBOURSÉ !</b> VOUS AVEZ 30 JOURS POUR RETOURNER VOTRE COMMANDE.</h2>} />
      <BanniereBlackAvantFooter />
      <Footer />
    </>
  );
}

function Clavier() {

  let { num } = useParams();
  return (
    <>
      <Header />
      <ChatbotButton />
      <FicheProduit num={num} categorie="clavier" />
      <BanniereBleu texte={<h2><b>SATISFAIT OU REMBOURSÉ !</b> VOUS AVEZ 30 JOURS POUR RETOURNER VOTRE COMMANDE.</h2>} />
      <BanniereBlackAvantFooter />
      <Footer />
    </>
  );
}

function Guitare() {

  let { num } = useParams();
  return (
    <>
      <Header />
      <ChatbotButton />
      <FicheProduit num={num} categorie="guitare" />
      <BanniereBleu texte={<h2><b>SATISFAIT OU REMBOURSÉ !</b> VOUS AVEZ 30 JOURS POUR RETOURNER VOTRE COMMANDE.</h2>} />
      <BanniereBlackAvantFooter />
      <Footer />
    </>
  );
}

function EffetGuitare() {

  let { num } = useParams();
  return (
    <>
      <Header />
      <ChatbotButton />
      <FicheProduit num={num} categorie="effet-guitare" />
      <BanniereBleu texte={<h2><b>SATISFAIT OU REMBOURSÉ !</b> VOUS AVEZ 30 JOURS POUR RETOURNER VOTRE COMMANDE.</h2>} />
      <BanniereBlackAvantFooter />
      <Footer />
    </>
  );
}


// SINGUP & LOGIN

// function SignupPage() {
//   return (
//     <Container className="d-flex align-items-center justify-content-center"
//       style={{ minHeight: "100vh" }}
//     >
//       <div className="w-100" style={{ maxWidth: '400px' }}>
//         <Signup />
//       </div>
//     </Container>
//   );
// }

// function LoginPage() {
//   return (
//     <Container className="d-flex align-items-center justify-content-center"
//       style={{ minHeight: "100vh" }}
//     >
//       <div className="w-100" style={{ maxWidth: '400px' }}>
//         <Login />
//       </div>
//     </Container>
//   );
// }




function GestionProfil() {
  return (
    <>
      <Header />
      <ChatbotButton />
      <AccountProfil />
      <BanniereBleu texte={<h2><b>SATISFAIT OU REMBOURSÉ !</b> VOUS AVEZ 30 JOURS POUR RETOURNER VOTRE COMMANDE.</h2>} />
      <BanniereBlackAvantFooter />
      <Footer />
    </>
  );
}

function CreerNouveauCompte() {

  let { email } = useParams();
  return (
    <>
      <Header />
      <ChatbotButton />
      <CreateAccount email={email} />
      <BanniereBleu texte={<h2><b>SATISFAIT OU REMBOURSÉ !</b> VOUS AVEZ 30 JOURS POUR RETOURNER VOTRE COMMANDE.</h2>} />
      <BanniereBlackAvantFooter />
      <Footer />
    </>
  );
}


export default App;
