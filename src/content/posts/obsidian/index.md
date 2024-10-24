---
title: Obsidianって便利だね！
description: "Obsidian Syncなしで同期できる?!"
image: "./obsidian.png"
published: 2023-06-20
tags: [Obsidian, Tips]
category: Techs
draft: false
---

:::note[INFOMATION]
2024年9月現在、月3ドルなのでふつうに買った方がお得かもです。
:::

## Obsidianってご存知ですか？

Obsidianとは、無料のMarkdownファイルエディターです。

様々なプラグインがあるので、カレンダーやアイデアを書き連ねる雑記帳、メモ帳などやタスク管理などにも使えます。

もちろん、フローチャートやマインドマップなどもプラグインによって使えるようになっており、.mdのファイルを扱うために最適化されているエディターだと言えます。

## 他のデバイスと同期しながら使いたい

でもそんなつよつよなObsidianにも欠点があります。それは、**デバイス間でのデータの同期をするにはObsidian Syncというサブスクに加入しなければならないこと。**

月に200円ぐらいなら「使ってみようかな？」となりますが、驚く勿れ、なんと月8ドル(約1128円($1=¥141換算))

これではあまりにも学生には手が出せません。

そこで考えました。「課金機能が高いなら自分で作ってしまえばいいじゃない。」

もちろん、前述の通り、Obsidianは拡張機能が豊富なので、Obsidian GitなどのGitツールもありますが、マニュアルが英語しかなく、操作が難しいものばかり。

MarkdownファイルなのでGitHubのプライベートリポジトリかなんかにあげて仕舞えばいいわけです。

**_注)Linuxはこの方法には対応していません。_**

## Gitにバックアップを取ろう

### Gitのインストール

まずは、お使いの端末にGitをインストールしてください。

すでにお済みの方は次の章まで飛ばしていただいて構いません。

```shell
//Homebrew(macOS)
$ brew install git
```

```shell
//MacPorts(macOS)
$ sudo port install git
```

```shell
//WinGet(Powershell)
$ winget install --id Git.Git -e --source winget
```

もしくは[64bit-WindowsOS用の.exeインストーラー](https://github.com/git-for-windows/git/releases/download/v2.41.0.windows.1/Git-2.41.0-64-bit.exe)でインストールすることもできます。

### GitHub Desktopのインストール

その次にGitHub Desktopをインストールしてください。

すでにお済みの方は次の章まで飛ばしていただいて構いません。

- macOS(Intelチップ)用インストーラー
[ダウンロードする](https://central.github.com/deployments/desktop/desktop/latest/darwin)

- macOS(AppleSilicon)用インストーラー
[ダウンロードする](https://central.github.com/deployments/desktop/desktop/latest/darwin-arm64)

- Windows用インストーラー
[ダウンロードする](https://central.github.com/deployments/desktop/desktop/latest/win32)

### Obsidianの設定

Obsidianをインストールし、初期設定をします。

1. まず、[Obsidianをダウンロード](https://obsidian.md/)してください。
2. Obsidianを起動したら、メニューの最下部の言語設定を`English`から`日本語`に変えます。
3. 次に、メニューの一番上の選択肢、「保管庫を新規作成する」を選びます。
4. 「保管庫の名称」にお好きなものを入れてください。この記事では仮に`obsidian`とします。
5. 「ロケーション」でファイルの場所を指定します。この記事では`\Users\documents\obsidian`(Windowsの場合は`C:¥Users¥Documents¥obsidian`)とします。
6. 「作成」ボタンを押したらObsidianの設定は完了です。

### GitHub Desktopの設定

GitHub Desktopにご自分のGitHubアカウントでログインします。

その後、WebのGitHub上でお好きな*プライベートリポジトリ*を作成しておいてください。(プライベートにしないと、書いた内容が全世界に発信されてしまいます。)

アプリケーションのウィンドウ上部の「file」もしくは「ファイル」(どちらかになっていると思います！)をクリックし、「Add local repository」を選択します。

その後、表示されるポップアップウィンドウに先ほど設定したObsidianのファイルを設定します。

これで、ローカルのリポジトリと、リモートのリポジトリが結びつきました！

念の為、上の方にある「Fetch Origin」というボタンを押し、リモートとローカルを同期します。

Obsidianでファイルを変更した後は、左下の「summary」にコミットメッセージを入力して、下にある「commit to main」という青いボタンを押して、もう一度「Fetch Origin」を押して同期すればバックアップ完了です！

## 総括
今回はObsidian Syncに課金せずとも、複数端末でデータを同期できるようにする方法の解説でした。

今回の方法は、GitHub DesktopのアプリケーションにLinux用がないため、Linuxをお使いの方には全く同じ方法でお使いいただくことができません。

:::note
でも(Linuxを使うような)知識のある方はきっと、LinuxにGitHubDesktopインストールできなくてもCLI叩いて再現しますよね。。。
:::

最後までお読みくださりありがとうございました。