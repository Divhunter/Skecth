import React from "react"
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import logoMutuactP from '../../public/assets/pictures/logo-mutuact-blanc-solo.png'

// styles
import './m-cgu.css'
import './d-cgu.css'

const CGU = () => {

    // localStorage.removeItem('token')

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <section id='cgu'className='cgu'>
            <Link to='/'>
                <img 
                    className='cgu__logo-mutuact' 
                    src={logoMutuactP} alt='logo mutuact' 
                />
            </Link>
            <h1>Mentions légales</h1>

            <h2>Politique de Confidentialité</h2>

            <p>
                <strong>Dernière mise à jour : 07/04/2025</strong>
            </p>
            <p>
                La présente Politique de Confidentialité décrit comment MUTUACT collecte, utilise et
                partage les informations personnelles.
                <br/>
                Nous accordons une grande importance à la protection de votre vie privée et au respect de la
                législation en vigueur, notamment le Règlement Général sur la Protection des Données
                (RGPD) et la loi Informatique et Libertés modifiée.
            </p>
            <div>-</div>
            <p>
                <strong>1. Responsable du traitement :</strong>
                <br/><br/>
                Le responsable du traitement des données personnelles collectées est :
                <br/><br/>
                La société : MUTUACT
                <br/>
                Siège Social : 41 Rue de la Découverte -31670- LABEGE FRANCE
                <br/>
                Numéro de SIRET : 753446731
                <br/>
                Adresse e-mail de contact : mutuact@mutuact.fr
                <br/>
                Numéro de téléphone de contact : 06 28 18 02 03
            </p>
            <div>-</div>
            <p>
                <strong>2. Données collectées :</strong>
                <br/><br/>
                Dans le cadre de votre demande de devis ou de comparaison de mutuelles, nous pouvons
                collecter les catégories de données suivantes :
                <br/><br/>
                - Données d'identification : Nom, prénom.
                <br/>
                - Données de contact : Numéro de téléphone, adresse e-mail.
                <br/>
                - Informations relatives à votre situation : Âge, Adresse, ville de résidence.
                <br/>
                - Les données relatives à vos équipements et besoins pour le service demandé (ces
                informations nous permettent de mieux comprendre vos besoins et d'adapter le bilan).
            </p>
            <div>-</div>
            <p>
                <strong>3. Finalités du traitement des données personnelles :</strong>
                <br/><br/>
                Les données collectées sont traitées pour les finalités suivantes :
                <br/><br/>
                - Gérer vos demandes via les formulaires de contact.
                <br/>
                - Améliorer votre expérience utilisateur.
                <br/>
                - Assurer la sécurité du site.
                <br/>
                - Effectuer des campagnes marketing (avec votre consentement).
                <br/>
                - Les informations renseignées dans le cadre d’une demande de services sont destinées à
                trouver le meilleur produit chez nos experts partenaires.
            </p>
            <div>-</div>
            <p>
                <strong>4. Base juridique du traitement :</strong>
                <br/><br/>
                Le traitement de vos données personnelles est basé sur les fondements juridiques suivants :
                <br/><br/>
                - Votre consentement : Lorsque vous remplissez et soumettez le formulaire, vous consentez
                expressément à la collecte et au traitement de vos données personnelles pour les finalités
                décrites ci-dessus.
                <br/>
                - L'exécution de mesures précontractuelles prises à votre demande : Le traitement de vos
                données est nécessaire pour donner suite à votre demande de bilan personnalisé.
                <br/>
                - Le respect des obligations légales et réglementaires applicables : La lutte contre le
                blanchiment des capitaux et l’exécution et la gestion de votre contrat.
            </p>
            <div>-</div>
            <p>
                <strong>5. Destinataires des données personnelles :</strong>
                <br/><br/>
                Vos données peuvent être communiquées aux destinataires suivants, dans la limite de leurs
                besoins respectifs :
                <br/><br/>
                - Notre personnel interne : Les équipes commerciales et administratives en charge du
                traitement des demandes de contact.
                <br/>
                - Les autorités en cas d’obligation légale.
                <br/>
                - Nos experts partenaires choisis si vous avez donné votre consentement.
                <br/>
                - Nos outils de gestion comme Google, Make.com, Meta ads.
                <br/><br/>
                <strong>Nous ne vendons ni ne louons vos données personnelles à des tiers à des fins commerciales.</strong>
            </p>
            <div>-</div>
            <p>
                <strong>6. Transfert de données hors de l'Union Européenne :</strong>
                <br/><br/>
                Vos données personnelles sont traitées au sein de l'Union Européenne. Dans le cas où un
                transfert de données vers un pays tiers en dehors de l'Union Européenne serait nécessaire,
                nous nous assurerions que ce transfert est effectué conformément aux lois applicables et que
                des garanties appropriées sont mises en place pour assurer la protection de vos données (par
                exemple, clauses contractuelles types, approuvées par la Commission Européenne).
            </p>
            <div>-</div>
            <p>
                <strong>7. Durée de conservation des données personnelles :</strong>
                <br/><br/>
                Vos données personnelles seront conservées pendant une durée n'excédant pas celle
                nécessaire aux finalités pour lesquelles elles sont collectées et traitées, conformément aux
                délais de prescription légaux et réglementaires applicables. Plus précisément :
                <br/><br/>
                - Les données collectées via le formulaire seront conservées pendant une durée de 3 ans à
                compter de votre dernier contact avec nous, sauf obligation légale de conservation plus
                longue.
                <br/>
                - Concernant les cookies, nous les conservons pendant une durée de treize mois à compter de
                la date de navigation
            </p>
            <div>-</div>
            <p>
                <strong>8. Sécurité de vos données personnelles :</strong>
                <br/><br/>
                Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour
                garantir la sécurité de vos données personnelles contre la destruction, la perte, l'altération, la
                divulgation ou l'accès non autorisé, conformément à aux exigences de la réglementation
                applicable. Ces mesures comprennent notamment :
                <br/><br/>
                - Accès restreints aux données
                <br/>
                - Sauvegardes régulières
                <br/>
                - Historiques des actions
                <br/>
                - Hébergement sécurisé
                <br/>
                - Formations à la sécurité informatique
            </p>
            <div>-</div>
            <p>
                <strong>9. Utilisation des Cookies :</strong>
                <br/><br/>
                Notre site utilise des cookies pour :
                <br/><br/>
                - Améliorer votre navigation.
                <br/>
                - Mesurer l’audience du site.
                <br/>
                - Proposer des contenus personnalisés.
                <br/> <br/>
                Vous pouvez gérer vos préférences depuis notre bandeau de consentement ou via les
                paramètres de votre navigateur.
            </p>
            <div>-</div>
            <p>
                <strong>10. Vos droits :</strong>
                <br/><br/>
                Conformément au RGPD et à la loi Informatique et Libertés modifiée, vous disposez des
                droits suivants concernant vos données personnelles :
                <br/><br/>
                Droit d'accès : Vous avez le droit de savoir si nous traitons vos données personnelles et d'en
                obtenir une copie.
                <br/><br/>
                Droit de rectification : Vous avez le droit de demander la correction des données
                personnelles inexactes ou incomplètes vous concernant.
                <br/><br/>
                Droit à l'effacement : Vous avez le droit de demander la suppression de vos données
                personnelles dans certaines circonstances (par exemple, si elles ne sont plus nécessaires aux
                finalités pour lesquelles elles ont été collectées, si vous retirez votre consentement).
                <br/><br/>
                Droit à la limitation du traitement : Vous avez le droit de demander la limitation du
                traitement de vos données personnelles dans certaines circonstances (par exemple, en cas de
                contestation de l'exactitude des données).
                <br/><br/>
                Droit à la portabilité des données : Vous avez le droit de recevoir les données personnelles
                que vous nous avez fournies dans un format structuré, couramment utilisé et lisible par
                machine, et de les transmettre à un autre responsable du traitement.
                <br/><br/>
                Droit d'opposition : Vous avez le droit de vous opposer à tout moment au traitement de vos
                données personnelles à des fins de marketing direct, y compris le profilage lié à de telles fins.
                Vous pouvez également vous opposer au traitement de vos données pour d'autres motifs
                légitimes.
            </p>
            <div>-</div>
            <p>
                <strong>11. Modifications de la présente Politique de Confidentialité :</strong>
                <br/><br/>
                Nous nous réservons le droit de modifier la présente Politique de Confidentialité à tout
                moment afin de l'adapter aux évolutions législatives et réglementaires ou à nos pratiques en
                matière de traitement des données personnelles.
                <br/>
                Nous vous encourageons à la consulter régulièrement.
            </p>
            <div>-</div>
            <p>
                <strong>12. Contact :</strong>
                <br/><br/>
                Pour toute question relative à la présente Politique de Confidentialité ou à la manière dont
                nous traitons vos données personnelles, vous pouvez nous contacter à l'adresse e-mail ou à
                l'adresse postale mentionnées à la section « Responsable du traitement ».
            </p>
            <div>-</div>
            <p>
                <strong>Pour exercer vos droits, veuillez nous contacter par :</strong>
                <br/><br/>
                E-mail : mutuact@mutuact.fr
                <br/><br/>
                Courrier postal : 41 Rue de la Découverte -31670- LABEGE France
                <br/><br/>
                Nous pourrons vous demander de justifier de votre identité afin de répondre à votre demande.
                Nous nous efforcerons de répondre à vos demandes dans les meilleurs délais et en tout état de
                cause dans les délais prévus par la réglementation.
            </p>
            
            {/*<h2>Concepteur</h2>
            <p>  
            Vowd.fr
            <br/>
            Idépendant libéral
            <br/>
            siret: 94994281700014
            <br/>
            Siège social : 7 cours Albert Thomas – 69003 (Lyon) - France
            </p>

            <div>-</div>

            <h2>Hébergeur du site & Prestataires</h2>
            <p>
                <strong>Hébergeur : Vercel</strong><br/>
                440 N Barranca Ave #4133 Covina, CA 91723 
            </p>
            <p>
                <strong>Prestataires extérieurs :</strong><br/>
                Google
                Editeur du site
                Cf page « Contact » du présent site Internet
            </p>

            <div>-</div>

            <h2>Propriété intellectuelle</h2>
            <p>
                L’ensemble de ce site relève des législations Françaises et Internationales sur les droits d’auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés pour les textes, images, photographies, sons, logiciels et éléments graphiques. La reproduction de tout ou partie de ce site quel qu’il soit, est formellement interdite sauf autorisation écrite de l’auteur ou créateur, conformément à l’article L 122-4 du Code de la Propriété intellectuelle.
            </p>

            <div>-</div>

            <h2>
                Crédits
            </h2>
            <p>
                L’ensemble des éléments (logotypes, photographies, illustrations, sons, vidéos, textes…) du présent site Internet appartient au responsable de l’entreprise, ses partenaires ou fournisseurs.
                <br/><br/>
                Si le devis le prévoit, les crédits photos sont Multimed Solutions et /ou Fotolia et / ou 123rf et / ou Unsplash et / ou Freepik et / ou Adobe Stock.
            </p>

            <div>-</div>

            <h2>
                Responsabilités
            </h2>
            <p>
                Le créateur du présent site Internet ainsi que ses partenaires ou fournisseurs ne pourront être tenus responsables d’intrusion, piratage, infection ou conséquence d’utilisation du présent site Internet.
            </p>

            <div>-</div>
            
            <h2>
                Informatique et libertés
            </h2>
            <p>
                Certains services du site nécessitent pour l’internaute de renseigner des données personnelles par le biais de formulaires en ligne. Ces informations sont destinées exclusivement à la société éditrice du présent site Internet.
                <br/><br/>
                L’internaute peut s’y opposer en contactant la société éditrice du site Internet ici. Les internautes disposent d’un droit d’accès, de rectification et de suppression des données les concernant.
            </p>

            <div>-</div>

            <h2>
                Collecte des données
            </h2>
            <p>
                Notre site internet « mutuact.fr » collecte des données personnelles :
                Quand vous nous contactez à l’aide d’un de nos formulaires.
                Quelles sont les données collectées et pourquoi ?
                Uniquement des informations nécessaires à notre échange telles que : votre nom, prénom, adresse email, téléphone.
                <br/><br/>
                Les données marquées par un astérisque, ou la mention « (obligatoire) », dans le formulaire de contact doivent obligatoirement être fournies. Dans le cas contraire, nous serions dans l’incapacité d’apporter une réponse à votre demande. Notre site est sécurisé en « https » afin d’assurer la protection des données échangées.
            </p>

            <div>-</div>

            <h2>
                Usage & Durée de conservation des données
            </h2>
            <p>
                Afin de préserver la confidentialité des données collectées, ces dernières seront uniquement destinées à un usage interne, dans le cadre du traitement de votre demande et de la relation commerciale pouvant en découler.
                <br/><br/>
                Ces données seront conservées pendant une durée de 1 an à compter de leur création. Cette durée est déterminée à des fins de communication et d’archive.
            </p>

            <div>-</div>

            <h2>
                Comment voir ou supprimer mes données ?
            </h2>
            <p>
                Raison Sociale : MUTUACT
                <br/><br/>
                Adresse du siège social : 41 Rue de la Découverte CS37621 - 31670 Labège - France
                <br/><br/>
                Pour toute demande relative à vos données personnelles, vous pouvez nous contacter directement (via notre formulaire de contact) afin de consulter ou demander la suppression de ses données collectées. Nous vous répondrons dans un délai de 30 jours.
            </p>

            <div>-</div>

            <h2>
                Utilisations de cookies
            </h2>
            <p>
                Ce site nécessite l’utilisation de cookies (marqueur témoin). Des informations non personnelles sont enregistrées par ce système, elles n’ont aucune signification en dehors de leur utilisation sur le présent site Internet. L’internaute peut refuser ces cookies ou les supprimer. Nous vous conseillons de consulter l’aide de votre navigateur pour connaître la marche à suivre.
                <br/><br/>
                Des mesures du nombre de visites, de pages vues ainsi que l’activité des visiteurs sur le site et leur fréquence de retour sont effectuées sur le présent site Internet.
            </p>

            <div>-</div>

            <h2>
                Gestion des cookies
            </h2>
            <p>
                Nous utilisons des cookies et middlewares persistants afin d’améliorer l’expérience utilisateur. Ces cookies sont conservés sur votre ordinateur même après fermeture de votre navigateur et réutilisés lors de vos prochaines visites sur notre site.
                <br/><br/>
                Cookies de sessions et middlewares présents sur ce site :
                <br/><br/>
                Cookie de session et middlewares propres au package NPM
                <br/><br/>
                Cookies de sessions utilisés par REACT JS
                <br/><br/>
                Cookies de personnalisation et middlewares de Wowd.fr
                <br/><br/>
                Cookies d’accès aux serveurs informatiques Vercel.com
                <br/><br/>
                Vous avez la possibilité de désactiver les cookies en vous rendant dans les options de votre navigateur. Cliquez sur le lien correspondant à votre navigateur pour découvrir comment faire :
                <br/>
            </p>
            <br/>
            <li>
                <a 
                    href="https://support.google.com/chrome/answer/95647?hl=fr" 
                    target="_blank" 
                    rel="noopener noreferrer">
                        Google Chrome
                </a>
            </li>
            <br/>
            <li>
                <a 
                    href="https://support.mozilla.org/fr/kb/activer-desactiver-cookies" 
                    target="_blank" 
                    rel="noopener noreferrer">
                        Mozilla Firefox
                </a>
            </li>
            <br/>
            <li>
                <a 
                    href="https://support.apple.com/kb/PH17191?viewlocale=fr_FR&amp;locale=en_US" 
                    target="_blank" 
                    rel="noopener noreferrer">
                        Safari
                </a>
            </li>
            <br/>
            <li>
                <a 
                    href="http://help.opera.com/Windows/10.20/fr/cookies.html" 
                    target="_blank" 
                    rel="noopener noreferrer">
                        Opera
                </a>
            </li>
            <br/>
            <li>
                <a 
                    href="https://support.microsoft.com/fr-fr/help/17442/windows-internet-explorer-delete-manage-cookies#ie=ie-11" 
                    target="_blank" 
                    rel="noopener noreferrer">
                        Internet Explorer
                </a>
            </li>
            <br/>*/}
        </section>
    )
}

export default CGU