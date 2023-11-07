import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Services from '../../components/Services';
import Team from '../../components/Team';
import FileHasher from '../../components/fileHash';
import LargeFileHasher from '../../components/fileHash/largeFileHash';

const Home = () => {
  return (
    <>
      <div>
        <Header />
        <FileHasher />
        <LargeFileHasher />
        <Services />
        <Team />
      </div>
    </>
  );
};

export default Home;
