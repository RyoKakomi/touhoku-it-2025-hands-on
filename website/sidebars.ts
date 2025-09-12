import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // AWS画像処理ハンズオン専用のサイドバー
  handsonSidebar: [
    {
      type: 'doc',
      id: 'handson/index',
      label: '🚀 ハンズオン概要',
    },
    {
      type: 'doc',
      id: 'handson/00-preparation',
      label: 'Step 0: 事前準備・環境確認',
    },
    {
      type: 'category',
      label: '📚 実装ステップ',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'handson/01-s3-bucket',
          label: 'Step 1: S3バケット作成',
        },
        {
          type: 'doc',
          id: 'handson/02-dynamodb',
          label: 'Step 2: DynamoDB設定',
        },
        {
          type: 'doc',
          id: 'handson/03-lambda',
          label: 'Step 3: IAMロール作成',
        },
        {
          type: 'doc',
          id: 'handson/04-lambda-function',
          label: 'Step 4: Lambda関数作成',
        },
        {
          type: 'doc',
          id: 'handson/05-s3-event',
          label: 'Step 5: S3イベント設定',
        },
        {
          type: 'doc',
          id: 'handson/06-cloudfront',
          label: 'Step 6: CloudFront設定',
        },
        {
          type: 'doc',
          id: 'handson/07-test',
          label: 'Step 7: システムテスト',
        },
      ],
    },
    {
      type: 'category',
      label: '🛠️ サポート',
      collapsed: true,
      items: [
        {
          type: 'doc',
          id: 'handson/08-troubleshooting',
          label: 'Step 8: トラブルシューティング',
        },
        {
          type: 'doc',
          id: 'handson/09-cleanup',
          label: 'Step 9: 後片付け',
        },
      ],
    },
    {
      type: 'category',
      label: '🚀 上級者向け拡張',
      collapsed: true,
      items: [
        {
          type: 'doc',
          id: 'handson/webp-extension',
          label: '拡張: WebP対応機能',
        },
      ],
    },
  ],
};

export default sidebars;
