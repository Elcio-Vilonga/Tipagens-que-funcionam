Tipagens que funcionam
=====

Uma aplicação que as tipagens definidas estão corretas para não gerar erros no código.

## Avaliação e o que fez:

Há cinco arquivos, chamados ```desafio1```, ```desafio2```, etc...

Em cada um desses arquivos, há tipagens configuradas de forma corrigida. Elas eram (o número da lista indica o número do desafio)

1. A tipagem ```IFullUser```  agora possue os campos de ```IUserWorker``` e também de ```IUserStudent```.

2. Usou-se a função TS ```Omit``` em ```IExtendedWithoutFields``` para fazer dele uma versão de ```IExtendedUser``` que seja igual a ```ISiblingsUser```

3. A tipagem ```myFunction``` agora é adequada para aceitar funções como a ```duplicarNumero```.

4. Fez-se com que a tipagem ```listType``` , aplicada como array em ```list_of_packs```, aceite valores numéricos e de texto.

5. Há a criação de um objeto  - ```userYouMader``` - no código, utilizando a tipagem ```IUserYouMade```. Ajustou-se essa tipagem para que os campos preenchidos no objeto sejam aceitos.

