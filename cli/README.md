# cli

## パーサーについて

[antlr](https://www.antlr.org/)から生成しています。

```bash
# antlrのCLIのインストール
pip install antlr4-tools
```

TypeScriptのパーサーを生成するためには、次のコマンドを実行します。

```bash
antlr4 -Dlanguage=TypeScript src/parser/SQLiteLexer.g4 src/parser/SQLiteParser.g4
```

[antlr4/typescript-target.md at master · antlr/antlr4 · GitHub](https://github.com/antlr/antlr4/blob/master/doc/typescript-target.md)
