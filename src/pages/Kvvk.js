import React, {useEffect} from 'react'
import { Outlet, Link } from 'react-router-dom'
import {BiArrowBack} from 'react-icons/bi'
import { useLocation } from "react-router-dom";

export const Kvvk = () => {
 const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);
  return (
    <>
      <div className='flex flex-col pt-2 sm:pt-10 px-4 w-full justify-center place-items-center'>
        <div className='container space-y-5'>
          <Link to="/" className='font-bold flex items-center space-x-2 text-white bg-palatte-2 bg-opacity-90 w-fit px-2 py-0.5 rounded-xl hover:shadow-[0_0px_15px_0px_rgba(131,144,250,0.35)] hover:bg-opacity-100 duration-200 ease-in'><span><BiArrowBack/></span><span>Geri</span></Link>
          <div className='font-bold flex flex-row space-x-2 items-center text-palatte-1'><span>KVVK Aydınlatma ve Açık Rıza Metni</span></div>
          <div className='w-full flex flex-col space-y-4 py-3 px-2 rounded-xl shadow-[0_0px_15px_0px_rgba(131,144,250,0.35)]'>
          <p><em>Son güncelleme tarihi: 13/02/2023</em></p>
          <p><strong>A. Veri Sorumlusu ve Temsilcisi</strong></p>
          <p>6698 sayılı Kişisel Verilerin Korunması Kanunu (“Kanun”) uyarınca, kişisel verileriniz; veri sorumlusu olarak psikologbul.io tarafından aşağıda açıklanan kapsamda işlenebilecektir.</p>
          <p><strong>B. Hangi Kişisel Verilerin İşleneceği</strong></p>
          <p>Aksi açıkça belirtilmedikçe, işbu Aydınlatma Metni kapsamında arz edilen hüküm ve koşullar kapsamında “Kişisel Veri” ifadesi aşağıda yer alan bilgileri tanımlamaktadır.</p>
          <p>Kanun’un 3 ve 7. maddesi uyarınca, geri döndürülemeyecek şekilde anonim hale getirilen veriler, Kanun hükümleri uyarınca kişisel veri olarak kabul edilmeyecek ve bu verilere ilişkin işleme faaliyetleri işbu Aydınlatma Metni hükümleri ile bağlı olmaksızın gerçekleştirecektir.</p>
          <p>Tarafımızca yürütülmekte olan depremzedelere ücretsiz psikolojik destek listeleme faaliyeti kapsamında, sisteme entegre olarak ücretsiz psikolojik destek sağlamak isteyen kişilerin (“Veri Sahibi”) başvuru anında elektronik ortamda Google Form üzerinden sağladığı kimlik bilgisi, iletişim bilgisi, mesleki yetkinlik bilgisi; buna ilave olarak kriterleri sağlayıp psikologbul.io’ya entegre olunması halinde kullanıcı bilgisi, kullanıcı işlem bilgisi, görsel/işitsel veri, işlem bilgisi, işlem güvenliği bilgisi, risk yönetimi bilgisi, lokasyon bilgisi, ve talep/şikâyet yönetimi bilgisine ilişkin veriler işlenmektedir.</p>
          <p><strong>C. Kişisel Verilerin Hangi Amaçla İşleneceği</strong></p>
          <p><strong>Toplanan kişisel verileriniz;</strong></p>
          <p>
           <ol className='list-disc px-6'>
            <li>Veri Sahibi’nın psikologbul.io’da yer alabilmesi için veri sorumlusu ve psikologbul.io kapsamında yürütülen gönüllü faaliyete destek olan kişiler tarafından gerekli incelemelerin yapılması,</li>
            <li>Veri Sahibi tarafından sunulan hizmetlerin ilgili kişilere sunulması, önerilmesi ve tanıtılması için gerekli olan aktivitelerin planlanması ve icrası,</li>
            <li>psikologbul.io tarafından kullanılan/kullanılacak yapay zekanın geliştirilmesi faaliyetlerinin yönetilmesi ve icrası,</li>
           </ol>
           amaçlarıyla (“Amaçlar”)
          </p>
          <p>Kanun’un 5. ve 6. maddelerinde belirtilen kişisel veri işleme şartları dahilinde işlenebilecektir.</p>
          <p><strong>D. İşlenen Kişisel Verilerin Kimlere ve Hangi Amaçla Aktarılabileceği</strong></p>
          <p>psikologbul.io, yukarıda anılan Amaçlar’ın yerine getirilmesi ile sınırlı olarak, barındırma hizmeti almak için kişisel verileri Veri Sahibi’nın ikamet ettiği ülke dışında dünyanın herhangi bir yerinde bulunan sunucularına aktarma hakkına sahiptir. Ayrıca psikologbul.io, yürüttüğü faaliyet kapsamında gönüllü kişilerin gerekli elemelere tabi tutulabilmesi için, ilgili verilerin konunun uzmanlarına aktarımını sağlama hakkına da sahiptir.</p>
          <p><strong>E. Kişisel Veri Toplamanın Yöntemi ve Hukuki Sebebi</strong></p>
          <p>Kişisel verileriniz, yukarıda belirtilen Amaçlar doğrultusunda elektronik ortamda Kanun’un 5. ve 6. maddelerinde belirtilen kişisel veri işleme şartlarına dayalı olarak, doldurulan Google Form aracılığıyla toplanmaktadır.</p>
          <p><strong>F. Kişisel Veri Sahibinin Kanun’un 11. maddesinde Sayılan Hakları</strong></p>
          <p>Kişisel veri sahibi olarak Kanun’un 11. maddesi uyarınca aşağıdaki haklara sahip olduğunuzu bildiririz:</p>
          <p>
           <ol>
            <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme,</li>
            <li>Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme,</li>
            <li>Kişisel verilerinizin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme,</li>
            <li>Yurt içinde veya yurt dışında kişisel verilerinizin aktarıldığı üçüncü kişileri bilme,</li>
            <li>Kişisel verilerinizin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme ve bu kapsamda yapılan işlemin kişisel verilerinizin aktarıldığı üçüncü kişilere bildirilmesini isteme,</li>
            <li>Kanun’a ve ilgili diğer kanun hükümlerine uygun olarak işlenmiş olmasına rağmen, işlenmesini gerektiren sebeplerin ortadan kalkması hâlinde kişisel verilerin silinmesini veya yok edilmesini isteme ve bu kapsamda yapılan işlemin kişisel verilerinizin aktarıldığı üçüncü kişilere bildirilmesini isteme,</li>
            <li>İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkması durumunda buna itiraz etme,</li>
            <li>Kişisel verilerinizin kanuna aykırı olarak işlenmesi sebebiyle zarara uğramanız hâlinde zararın giderilmesini talep etme.</li>
           </ol>
          </p>
          <p>Yukarıda sıralanan haklarınıza yönelik başvurularınızı info@psikologbul.io adresine yazılı olarak veya mevzuat/Kişisel Verileri Koruma Kurulu tarafından öngörülen diğer yöntemler ile iletebilirsiniz.</p>
          <p><strong>G.  Açık Rıza Onay Metni</strong></p>
          <p>6698 sayılı Kişisel Verilerin Korunması Kanunu çerçevesinde kişisel/özel nitelikli kişisel verilerimin; psikologbul.ioweb sitesi ve bu sitede yapılan yönlendirme ile Google Form üzerinden tamamen veya kısmen elde edilmesi, kaydedilmesi, depolanması, değiştirilmesi, güncellenmesi, sınıflandırılması, işlendikleri amaç için gerekli olan ya da ilgili kanunda öngörülen süre kadar muhafaza edilmesi, kanuni nedenlerle veya yapılan işin niteliği gereği üçüncü kişiler ile paylaşılması, yurtdışına aktarılması da dahil olmak üzere yukarıda açıklandığı üzere işlenmesine, konu hakkında tereddüde yer vermeyecek şekilde bilgi sahibi ve aydınlatılmış olarak açık rızam ile onay veriyorum. Ayrıca psikologbul.io web sitesinin, depremzedelere ücretsiz psikolojik destek sağlayan bir platform olduğunu, ilgili başvuru formunu doldurarak psikologbul.io‘da iletişim bilgilerimin yayınlanmasına da izin verdiğimi açık rızam ile kabul ediyorum.</p>
          <p><strong>H.  Veri Sorumlusu Bilgisi</strong></p>
          <div className="flex flex-col">
           <span>Ad Soyad: Hatice Şeyma Kara</span>
           <span>Web Sitesi: psikologbul.io</span>
           <span>E-Mail: <a href="mailto:haticeseymaakara@gmail.com" className='font-bold underline'>haticeseymaakara@gmail.com</a></span>
           <span>Adres: Çağlayan Mah. Zengin Sokak 19/10 Kağıthane/İstanbul</span>
          </div>
          </div>
        </div>
      </div>  
      <Outlet/>
    </>
  )
}