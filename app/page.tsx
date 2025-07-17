import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Users, Eye, MousePointer, ArrowRight, Quote } from "lucide-react"

export default function LPMangaSalesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-blue-900">LP漫画導入サービス</h1>
            <Badge variant="secondary" className="bg-orange-100 text-orange-800">
              申込率UP
            </Badge>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            なぜあなたのLPは
            <span className="text-red-600">申し込まれない</span>のか？
          </h2>

          {/* 画像挿入スペース */}
          <div className="mb-8">
            <div className="flex flex-col items-center gap-6 max-w-2xl mx-auto">
              {/* 画像1 */}
              <div className="w-full rounded-lg overflow-hidden shadow-lg">
                <img src="/images/1.jpg" alt="LP申込が来ない悩みを抱える女性の漫画" className="w-full h-auto" />
              </div>

              {/* 画像2 */}
              <div className="w-full rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/images/2.jpg"
                  alt="漫画の効果について説明するコンサルタントとの会話"
                  className="w-full h-auto"
                />
              </div>

              {/* 画像3 */}
              <div className="w-full rounded-lg overflow-hidden shadow-lg">
                <img src="/images/3.jpg" alt="漫画導入の相談から効果実感までの流れ" className="w-full h-auto" />
              </div>

              {/* 画像4 */}
              <div className="w-full rounded-lg overflow-hidden shadow-lg">
                <img src="/images/4.jpg" alt="想いを届ける漫画の力についてのメッセージ" className="w-full h-auto" />
              </div>
            </div>
          </div>

          <p className="text-xl text-gray-600 mb-8">
            月100万円稼ぐコンサルタントでも、LPの申込率は平均0.5%。
            <br />
            でも、漫画を導入したLPは<span className="font-bold text-blue-600">平均1.8%</span>まで向上します。
          </p>
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8 text-left max-w-2xl mx-auto">
            <p className="text-gray-700">
              「文字だらけのLPを最後まで読む人は、たった3%しかいません。
              しかし漫画なら、85%近くの人が最後まで読み進めます。」
            </p>
          </div>
        </div>
      </section>

      {/* セールストーク */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="border-2 border-blue-200">
            <CardHeader className="bg-blue-50">
              <CardTitle className="text-2xl text-blue-900 flex items-center gap-2">
                <Quote className="h-6 w-6" />
                LP漫画導入の決定的メリット
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="text-lg leading-relaxed text-gray-700">
                <p className="mb-4">
                  あなたのサービスがどんなに素晴らしくても、
                  <span className="font-bold text-red-600">伝わらなければ意味がありません</span>。
                  文字だけのLPは「読むのが面倒」「内容が頭に入らない」「感情が動かない」という3つの壁があります。
                </p>
                <p className="mb-4">
                  しかし漫画なら、
                  <span className="font-bold text-blue-600">
                    ストーリーで感情を動かし、視覚的に理解を促進し、最後まで読ませる力
                  </span>
                  があります。 実際に導入した方の平均申込率は
                  <span className="font-bold text-green-600">2倍以上に向上</span>。
                </p>
                <p className="font-bold text-gray-900">あなたの専門知識を、お客様の心に届く「物語」に変えませんか？</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 導入ストーリー骨子 */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">感情を動かす導入ストーリー設計</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-blue-900">読まれないLPの悩み</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  「3ヶ月かけてLPを完成させたのに、申込が全然来ない...」
                  頑張って作ったのに成果が出ない焦りと不安。ターゲットが抱える具体的な悩みで共感を呼び、問題提起を行う導入部分。
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-green-900">LPマンガとの出会い</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  「最近、『マンガ』を使った手法がすごく効いているんだよ」
                  新しい解決策としてのLP漫画との出会い。驚きと希望を感じさせ、具体的な解決策を提示する。
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-orange-900">実行と成果</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  「本当にこれで変わるんでしょうか...」から「マンガの申込が来た！？」
                  不安から実際の成果実感まで。ビフォーアフターを描写し、安心と感動を与える転換点。
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-purple-900">喜びと未来</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  「やっと...本当に届けたかった人に届いた...」
                  成果への喜びと、理想の未来への自信と期待。行動喚起と信頼感を醸成し、読者の背中を押す。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 効果比較データ */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">LP漫画導入前後の劇的変化</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-red-200">
              <CardHeader className="bg-red-50">
                <CardTitle className="text-xl text-red-900 flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 rotate-180" />
                  導入前（文字のみLP）
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="text-center py-8">
                  <p className="text-gray-600 text-lg">
                    従来の文字中心のLPでは
                    <br />
                    思うような成果が得られない...
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="border-green-200">
              <CardHeader className="bg-green-50">
                <CardTitle className="text-xl text-green-900 flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  導入後（漫画LP）
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">ページ滞在時間</span>
                    <span className="font-bold text-green-600">10%~40%向上</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">最後まで読む率</span>
                    <span className="font-bold text-green-600">50%超</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">申込率（CVR）</span>
                    <span className="font-bold text-green-600">1.5倍~6倍</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">平均契約率</span>
                    <span className="font-bold text-green-600">2.5倍</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Badge
  asChild
  variant="default"
  className="bg-blue-600 text-white text-lg px-6 py-2"
>
  <a
    href="https://coconala.com/services/3782562"
    target="_blank"
    rel="noopener noreferrer"
  >
    契約率 2.5倍UP！あなたのビジネスが変わります
  </a>
</Badge>

          </div>
        </div>
      </section>

      {/* あるあるパターンと解決策 */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
            「申し込まないLP」3つのあるあるパターン
          </h3>
          <div className="space-y-8">
            <Card className="border-l-4 border-red-500">
              <CardHeader>
                <CardTitle className="text-xl text-red-900 flex items-center gap-2">
                  <Eye className="h-5 w-5" />
                  パターン1：「読まれない」問題
                </CardTitle>
                <CardDescription className="text-red-700">文字だらけで、3秒で離脱される</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">❌ よくある失敗</h4>
                    <ul className="text-gray-700 space-y-1">
                      <li>• 専門用語だらけの説明</li>
                      <li>• 長すぎる文章</li>
                      <li>• 単調なレイアウト</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-900 mb-2">✅ 漫画の解決アプローチ</h4>
                    <ul className="text-blue-700 space-y-1">
                      <li>• キャラクターの会話で自然に説明</li>
                      <li>• 視覚的に情報を整理</li>
                      <li>• ストーリーで引き込む</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-orange-500">
              <CardHeader>
                <CardTitle className="text-xl text-orange-900 flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  パターン2：「信頼されない」問題
                </CardTitle>
                <CardDescription className="text-orange-700">実績を並べても、胡散臭く感じられる</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">❌ よくある失敗</h4>
                    <ul className="text-gray-700 space-y-1">
                      <li>• 数字だけの実績アピール</li>
                      <li>• 顔写真のない証言</li>
                      <li>• 抽象的な効果説明</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-900 mb-2">✅ 漫画の解決アプローチ</h4>
                    <ul className="text-blue-700 space-y-1">
                      <li>• 実在感のあるキャラクター設定</li>
                      <li>• 具体的な変化プロセスを描写</li>
                      <li>• 感情の変化を視覚化</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-purple-500">
              <CardHeader>
                <CardTitle className="text-xl text-purple-900 flex items-center gap-2">
                  <MousePointer className="h-5 w-5" />
                  パターン3：「行動されない」問題
                </CardTitle>
                <CardDescription className="text-purple-700">
                  興味は持たれるが、申し込みボタンが押されない
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">❌ よくある失敗</h4>
                    <ul className="text-gray-700 space-y-1">
                      <li>• 緊急性の欠如</li>
                      <li>• 不安要素の解消不足</li>
                      <li>• 行動への後押し不足</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-900 mb-2">✅ 漫画の解決アプローチ</h4>
                    <ul className="text-blue-700 space-y-1">
                      <li>• 「今すぐ」の理由を物語で表現</li>
                      <li>• 不安を抱くキャラクターの解決過程</li>
                      <li>• 行動後の明るい未来を具体描写</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h3 className="text-3xl font-bold mb-6">あなたのLPを「申し込まれるLP」に変えませんか？</h3>
          <p className="text-xl mb-8 opacity-90">
            月商100万円アップも夢じゃない。LP漫画導入で、あなたのビジネスを次のステージへ。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
  asChild
  size="lg"
  className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-bold"
>
  <a
    href="https://coconala.com/services/3782562"
    target="_blank"
    rel="noopener noreferrer"
  >
    無料相談を申し込む
    <ArrowRight className="ml-2 h-5 w-5 inline-block" />
  </a>
</Button>
            <p className="text-sm opacity-75">※ 相談は完全無料。しつこい営業は一切ありません</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">© 2025 LP漫画導入サービス. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
