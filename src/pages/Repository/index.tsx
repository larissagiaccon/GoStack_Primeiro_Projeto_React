import React from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Link, useRouteMatch } from 'react-router-dom';

import logoImg from '../../assets/logo.svg';

import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logoImg} alt="Gitbub Explores" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img
            src="https://avatars.githubusercontent.com/u/23347166?s=460&u=abab595b0810dceff2f71e9f5d00492155acf848&v=4"
            alt="Imagem"
          />
          <div>
            <strong>Repositório</strong>
            <p>Descrição</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>numero</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>numero</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>numero</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to="to">
          <div>
            <strong>aa</strong>
            <p>aa</p>
          </div>

          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
