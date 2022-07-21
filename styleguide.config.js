const webpack = require('webpack');
const path = require('path');


const options = {
    propFilter: (prop, component) => {
        if (prop.declarations !== undefined && prop.declarations.length > 0) {
          const hasPropAdditionalDescription = prop.declarations.find((declaration) => {
            return !declaration.fileName.includes("node_modules");
          });
    
          return Boolean(hasPropAdditionalDescription);
        }
    
        return true;
      },
  }

module.exports = {
    dangerouslyUpdateWebpackConfig(config) { 
        config.module.rules.push({
            test: /.\.md$/,
            type: "javascript/auto"
            });
            config.plugins.push(
            new webpack.NormalModuleReplacementPlugin(
                /react-styleguidist\/lib\/loaders\/utils\/client\/requireInRuntime$/,
                "react-styleguidist/lib/loaders/utils/client/requireInRuntime"
            )
            );
            config.plugins.push(
            new webpack.NormalModuleReplacementPlugin(
                /react-styleguidist\/lib\/loaders\/utils\/client\/evalInContext$/,
                "react-styleguidist/lib/loaders/utils/client/evalInContext"
            )
            );
            return config;
    },
    title: "React-DSGOV - Documentação",
    template: {
        head: {
            links: [
                {
                    rel: 'stylesheet',
                    href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css'
                }
            ]
        }
    },
    sections: [
    {
        name: 'Introdução',
        content: 'docs/Introducao.md'
    },
    {
        name: 'Documentation',
        sections: [
        {
            name: 'Instalação',
            content: 'docs/Instalacao.md'
        },
        {
            name: 'Configuração',
            content: 'docs/Configuracao.md'
        }
        ]
    },
    {
        name: 'Componentes',
        components: 'src/components/**/*.{jsx,tsx}',
        exampleMode: 'collapse',
        usageMode: 'collapse'
    }
    ],
    propsParser: require("react-docgen-typescript").withCustomConfig(
        "./tsconfig.json",
        options
    ).parse
};