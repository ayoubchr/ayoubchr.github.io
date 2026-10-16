// Leerpad-inhoud uit Tabieb2be_offline.html, ongewijzigd overgenomen.
// De originele scripts schrijven naar window.*; hier is dat een lokaal object.
function build() {
  const window = {};
// Korte voorverkenningen. Hoofdstuktitels volgen het officiële KIW-leerstofoverzicht 2026.
window.KIW = [
{ id:'wiskunde', name:'Wiskunde', icon:'∑', color:'#5947c9', line:'Patronen zichtbaar maken', chapters:[
['1.1','Algebra','Van symbolen naar verbanden',[
['Lettervormen','Een letter kan een getal voorstellen dat je nog niet kent.','In 3x + 2 = 11 is x een onbekend getal. De vergelijking beschrijft een evenwicht: wat je aan één kant doet, doe je ook aan de andere kant.','Zie een vergelijking als een weegschaal.'],
['Machten & logaritmen','Een macht herhaalt vermenigvuldiging; een logaritme draait de vraag om.','2³ = 8 zegt: vermenigvuldig 2 drie keer met zichzelf. log₂(8) = 3 vraagt: hoeveel keer is die 2 nodig om 8 te krijgen?','De logaritme zoekt de exponent.'],
['Stelsels & matrices','Meerdere voorwaarden kun je tegelijk ordenen.','Een stelsel zoekt waarden die alle vergelijkingen tegelijk waar maken. Een matrix zet getallen overzichtelijk in rijen en kolommen, zodat je met gegevens kunt rekenen.','Twee voorwaarden zijn twee puzzelstukken van dezelfde oplossing.']]],
['1.2','Meetkunde','Vormen hebben regels',[
['Vlakke figuren','Een vorm heeft eigenschappen die niet afhangen van hoe je hem tekent.','Een driehoek heeft altijd een hoekensom van 180°. Bij gelijkvormige driehoeken zijn overeenkomstige hoeken gelijk en bijbehorende zijden evenredig.','Denk aan dezelfde foto op een groter scherm.'],
['Coördinaten','Met een vergelijking kun je een vorm in een assenstelsel beschrijven.','Een rechte kun je schrijven als y = ax + b. De waarde a bepaalt de helling; b vertelt waar de lijn de verticale as snijdt.','Een formule is een routebeschrijving voor alle punten van de lijn.'],
['Hoeken & goniometrie','Sinus en cosinus verbinden hoeken met lengtes.','Op de eenheidscirkel heeft een punt bij hoek θ de coördinaten (cos θ, sin θ). Daarom keren dezelfde waarden periodiek terug.','Een draaiende wijzer maakt een golf zichtbaar.']]],
['1.3','Analyse','Beweging in een grafiek',[
['Functies','Een functie koppelt aan elke toegelaten invoer precies één uitvoer.','Bij f(x) = x² hoort bij x = 3 de waarde 9. De grafiek toont in één beeld hoe de uitvoer verandert als je x wijzigt.','Een invoer gaat door een rekenmachine en levert één uitkomst.'],
['Afgeleide','De afgeleide vertelt hoe snel een functie op één plaats verandert.','Als een grafiek stijgt, is de helling lokaal positief. Waar de raaklijn horizontaal is, kan een maximum of minimum liggen.','Zoals een snelheidsmeter het tempo op dit moment aangeeft.'],
['Integraal','Een bepaalde integraal telt kleine bijdragen samen.','De oppervlakte tussen de grafiek van een niet-negatieve functie en de x-as kun je met een bepaalde integraal berekenen.','Veel smalle strookjes vormen samen een oppervlakte.']]],
['1.4','Kansrekening en statistiek','Orde in toeval',[
['Tellen','Of de volgorde ertoe doet, verandert het aantal mogelijkheden.','Een pincode 12 is anders dan 21. Bij het kiezen van twee teamleden maakt de volgorde meestal geen verschil.','Eerst de spelregels vastleggen, dan tellen.'],
['Kansboom','Een tak maakt een opeenvolgende gebeurtenis zichtbaar.','Bij twee opeenvolgende trekkingen zonder terugleggen verandert de samenstelling na de eerste trekking. De tweede kans hangt dus af van de eerste uitkomst.','Elke vertakking opent een nieuwe situatie.'],
['Verdeling','Een verzameling data kun je samenvatten zonder elk getal op te sommen.','Het gemiddelde beschrijft het centrum; de spreiding beschrijft hoeveel waarden uiteenlopen. Bij een normaal model hangt kans samen met oppervlakte onder de klokvormige curve.','Twee klassen kunnen hetzelfde gemiddelde hebben, maar andere spreiding.']]]]},
{ id:'fysica', name:'Fysica', icon:'◉', color:'#087eac', line:'De wereld in beweging', chapters:[
['2.1','Druk','Kracht verdeeld over ruimte',[
['Contactoppervlak','Dezelfde kracht geeft meer druk op een kleinere oppervlakte.','Druk = kracht / oppervlakte, met pascal als eenheid. Daarom zakt een brede sneeuwschoen minder snel weg dan een smalle hak.','Verspreid het gewicht over meer sneeuw.'],
['Vloeistof','Dieper in een vloeistof neemt de hydrostatische druk toe.','Hoe groter de diepte, de dichtheid of de zwaarteveldsterkte, hoe groter de bijdrage ρgh aan de druk.','Voel hoe water dieper op je oren drukt.'],
['Pascal','Een extra druk in een ingesloten vloeistof wordt overal doorgegeven.','Een hydraulisch systeem gebruikt een klein zuigeroppervlak en een groter zuigeroppervlak. Dezelfde druk kan zo op de grote zuiger een grotere kracht geven.','Een autokrik vergroot kracht via oppervlakte.']]],
['2.2','Gaswetten en warmteleer','Deeltjes vertellen het verhaal',[
['Temperatuur','Kelvin begint bij het absolute nulpunt.','Voor gaswetten gebruik je de absolute temperatuur: T(K) = t(°C) + 273,15. Bij 27 °C is dat ongeveer 300 K.','Een verdubbeling in °C is geen verdubbeling in K.'],
['Gas','Druk, volume, hoeveelheid en temperatuur hangen samen.','Voor een ideaal gas geldt pV = nRT. Als de hoeveelheid en temperatuur gelijk blijven, geeft een kleiner volume een hogere druk.','Duw de zuiger in een afgesloten spuit naar binnen.'],
['Fase','Tijdens een faseovergang kan warmte binnenkomen zonder temperatuurstijging.','Bij smelten gaat energie naar de verandering van toestand. Daarna kan extra warmte de temperatuur van het vloeibare water verhogen.','Een ijsblokje blijft tijdens het smelten rond 0 °C.']]],
['2.3','Elektrostatica','Onzichtbare krachten',[
['Lading','Gelijke ladingen stoten af; tegengestelde trekken aan.','Lading wordt gemeten in coulomb. De kracht tussen puntladingen hangt af van de grootte van beide ladingen en van hun onderlinge afstand.','Een geladen ballon trekt kleine papiersnippers aan.'],
['Veld','Een elektrisch veld beschrijft de kracht per positieve testlading.','Veldlijnen wijzen van positief naar negatief. In een homogeen veld lopen ze evenwijdig en liggen ze overal even dicht bij elkaar.','Veldlijnen zijn een kaart van mogelijke krachtsrichtingen.'],
['Potentiaal','Potentiaal beschrijft elektrische energie per lading.','Een lading kan energie winnen of verliezen wanneer ze in een elektrisch veld verplaatst. De kracht en de verplaatsing bepalen de energieverandering.','Zoals hoogte een rol speelt bij zwaarte-energie.']]],
['2.4','Elektrodynamica','Van batterij tot lampje',[
['Stroom & spanning','Stroom is lading die per tijd passeert; spanning is energie per lading.','Ampère meet stroomsterkte en volt meet spanning. Een batterij levert een potentiaalverschil dat een stroom in een gesloten kring mogelijk maakt.','De kring moet dicht zijn voordat de lamp brandt.'],
['Weerstand','Weerstand bepaalt bij gegeven spanning de stroom.','Voor een ohmse weerstand geldt U = RI. Als U gelijk blijft en R groter wordt, neemt I af.','Een nauwere doorgang remt de stroom.'],
['Serie & parallel','De verbinding bepaalt hoe stroom en spanning verdeeld worden.','In serie loopt dezelfde stroom door alle weerstanden. In parallel staat over elke tak dezelfde spanning. Het elektrische vermogen in een component is P = UI.','Eén route tegenover meerdere routes naast elkaar.']]],
['2.5','Elektromagnetisme','Stroom en magnetisme ontmoeten elkaar',[
['Magneetveld','Een magneet en een elektrische stroom kunnen een magnetisch veld opwekken.','Een kompasnaald richt zich naar het plaatselijke veld. Rond een rechte stroomdraad lopen veldlijnen in cirkels.','Stroom tekent onzichtbare cirkels rondom de draad.'],
['Kracht','Een bewegende lading kan in een magnetisch veld een kracht voelen.','De magnetische kracht staat loodrecht op de bewegingsrichting en op het veld. Ze verandert daardoor vaak de richting van de beweging.','Denk aan een baan die afbuigt.'],
['Inductie','Een veranderende magnetische flux kan spanning opwekken.','Als je een magneet naar een spoel toe beweegt, verandert de flux. De geïnduceerde stroom werkt volgens de wet van Lenz die verandering tegen.','Beweging kan in een generator elektriciteit worden.']]],
['2.6','Kernfysica','Wat gebeurt er in een kern?',[
['Isotopen','Isotopen hebben evenveel protonen, maar niet evenveel neutronen.','Het atoomnummer Z telt protonen; het massagetal A telt protonen plus neutronen. Koolstof-12 en koolstof-14 zijn isotopen van hetzelfde element.','Dezelfde elementnaam, een ander massagetal.'],
['Straling','Alfa-, bèta- en gammastraling verschillen in aard en doordringing.','Alfa bestaat uit heliumkernen, bèta uit deeltjes zoals elektronen of positronen en gamma uit elektromagnetische straling.','Niet alle straling is hetzelfde soort deeltje.'],
['Halveringstijd','Na één halveringstijd blijft gemiddeld de helft van de radioactieve kernen over.','Van 80 naar gemiddeld 40, daarna 20 en daarna 10: telkens halveert het aantal niet-vervallen kernen.','Een vaste fractie per tijdsinterval, geen vast aantal.']]],
['2.7','Kinematica','Beweging beschrijven zonder oorzaak',[
['Plaats','Positie en afgelegde weg zijn verschillende beschrijvingen.','Wie 3 m vooruit en 3 m terug loopt, legt 6 m af maar eindigt op de beginpositie.','De route is langer dan de netto verplaatsing.'],
['Snelheid','Snelheid zegt hoe positie met de tijd verandert.','Bij een constante snelheid is de x(t)-grafiek een rechte lijn. De helling van die lijn is de snelheid.','Een steilere lijn betekent sneller verplaatsen.'],
['Versnelling','Versnelling zegt hoe snelheid met de tijd verandert.','Bij constante versnelling verandert v(t) lineair en is x(t) gebogen. Bij een horizontale worp kun je horizontale en verticale beweging afzonderlijk bekijken.','Eén beweging, twee onafhankelijke richtingen.']]],
['2.8','Dynamica','Waarom iets beweegt',[
['Krachten','De nettokracht bepaalt de versnelling.','De tweede wet van Newton zegt ΣF = ma. Ook bij meerdere krachten tel je vectoren op: de richting telt mee.','Twee even sterke tegengestelde duwen heffen elkaar op.'],
['Arbeid & energie','Een kracht kan energie overdragen tijdens een verplaatsing.','Bij een constante kracht in de richting van de verplaatsing is W = Fs. Kinetische energie hoort bij beweging; potentiële energie bij een positie of vervorming.','Een vallend voorwerp ruilt hoogte-energie voor bewegingsenergie.'],
['Cirkel','Ook bij constante baansnelheid verandert de snelheidsrichting.','Voor een cirkelbaan is een naar het middelpunt gerichte versnelling en nettokracht nodig.','Een bocht is een versnelling, ook zonder sneller te rijden.']]],
['2.9','Trillingen en golven','Een patroon reist verder',[
['Trilling','Een harmonische trilling herhaalt zich rond een evenwichtsstand.','Amplitude is de maximale uitwijking. Periode is de tijd voor één cyclus; frequentie is het aantal cycli per seconde.','Een veer die op en neer gaat.'],
['Golf','Een golf vervoert energie terwijl het patroon zich verplaatst.','Bij een transversale golf trilt het medium dwars op de voortplantingsrichting; bij een longitudinale golf in dezelfde richting. Voor periodieke golven geldt v = fλ.','Een golf op een touw loopt door terwijl stukjes touw op en neer bewegen.'],
['Superpositie','Golven kunnen elkaar tijdelijk versterken of verzwakken.','Waar twee golven samenkomen, tel je hun uitwijkingen op. In een staande golf blijven knopen op hun plaats.','Twee muziektonen kunnen elkaar beïnvloeden.']]],
['2.10','Geluid','Een golf die je kunt horen',[
['Ontstaan','Een trillende bron kan drukveranderingen in een medium maken.','Geluid in lucht plant zich voort als een longitudinale golf: luchtdeeltjes trillen heen en weer rond hun plaats.','Een luidspreker laat de lucht mee trillen.'],
['Intensiteit','Geluidsintensiteit beschrijft energie per tijd en per oppervlakte.','Verder van een kleine bron verspreidt dezelfde energie zich over een groter oppervlak, zodat de intensiteit doorgaans afneemt.','Dezelfde golf bereikt een groter gebied.'],
['Decibel','De decibelschaal is logaritmisch.','Een verschil van 10 dB betekent een factor 10 in geluidsintensiteit, niet tienmaal zoveel dB.','De schaal comprimeert erg grote verschillen.']]]]},
{ id:'chemie', name:'Chemie', icon:'✳', color:'#b85a22', line:'Ontdek de bouwstenen', chapters:[
['3.1','Basiskennis','Stoffen herkennen en scheiden',[
['Stof of mengsel','Een zuivere stof heeft een vaste samenstelling; een mengsel bevat meerdere stoffen.','Water en zoutwater zijn verschillend: in zoutwater kun je de stoffen met een geschikte scheidingsmethode afzonderen.','Vraag eerst: uit hoeveel stoffen bestaat dit?'],
['Reacties','Bij een reactie ontstaan andere stoffen terwijl atomen behouden blijven.','De reagentia worden producten. Een reactievergelijking balanceer je zodat van elk element links en rechts evenveel atomen staan.','De bouwstenen blijven, hun verbindingen veranderen.'],
['Oplossen','Oplosmiddel en opgeloste stof beïnvloeden elkaar.','Water is polair en kan veel ionverbindingen oplossen. Zo kan een ionrooster uiteenvallen in gehydrateerde ionen: dissociatie.','Watermoleculen omringen de vrijgekomen ionen.']]],
['3.2','Atoomstructuur en periodiek systeem','Een kaart van de elementen',[
['Kern & elektronen','Protonen bepalen welk element een atoom is.','Z is het aantal protonen; A is protonen plus neutronen. Een neutraal atoom heeft evenveel elektronen als protonen.','Verander Z en je krijgt een ander element.'],
['Orbitalen','Elektronen bezetten energieniveaus en orbitalen.','De elektronenconfiguratie beschrijft hoe elektronen verdeeld zijn. Die verdeling helpt verklaren waarom elementen in een groep vergelijkbaar reageren.','De buitenste elektronen zijn chemisch belangrijk.'],
['Perioden & groepen','De plaats in de tabel bevat aanwijzingen.','Elementen in dezelfde hoofdgroep hebben een vergelijkbaar aantal valentie-elektronen; langs een periode verandert de bezetting stapsgewijs.','Het periodiek systeem is een patroonkaart.']]],
['3.3','Chemische binding','Waarom atomen samenblijven',[
['Ion of covalent','Een ionbinding steunt op aantrekking tussen ionen; een covalente binding deelt elektronenparen.','Na elektronenoverdracht kan een positief ion een negatief ion aantrekken. Twee niet-metalen kunnen elektronenparen delen.','Overdracht versus delen.'],
['Molecuulvorm','Elektronenparen nemen ruimte in en bepalen mee de vorm.','Water heeft een gebogen vorm. Daardoor heffen de polariteiten van de O–H-bindingen elkaar niet op en is het molecuul polair.','Niet alleen welke bindingen, ook hoe ze wijzen.'],
['Tussen moleculen','Aantrekkingskrachten beïnvloeden het kook- en smeltpunt.','Waterstofbruggen tussen watermoleculen helpen verklaren waarom water voor zijn massa een relatief hoog kookpunt heeft.','Om te verdampen moeten moleculen elkaar loslaten.']]],
['3.4','Chemisch rekenen','Van deeltje naar meetbare hoeveelheid',[
['Mol','Een mol is een afgesproken aantal deeltjes.','Eén mol bevat ongeveer 6,022 × 10²³ entiteiten. Met de molaire massa zet je een massa om naar een stofhoeveelheid.','Een dozijn telt 12; een mol telt veel meer.'],
['Concentratie','Concentratie vergelijkt opgeloste hoeveelheid met oplossing.','De molaire concentratie c = n/V gebruikt mol per liter oplossing. Bij verdunnen voeg je oplosmiddel toe terwijl de hoeveelheid opgeloste stof gelijk blijft.','Dezelfde siroop in meer water smaakt minder sterk.'],
['Reactieverhouding','Coëfficiënten geven verhoudingen in mol.','Bij 2 H₂ + O₂ → 2 H₂O reageren twee mol H₂ met één mol O₂ tot twee mol water. Het reagens dat eerst opraakt begrenst de opbrengst.','Een recept kan stoppen omdat één ingrediënt op is.']]],
['3.5','Chemische kinetiek','Hoe snel verloopt een reactie?',[
['Botsingen','Deeltjes moeten passend botsen om te reageren.','Meer botsingen leveren pas meer reactie op als er voldoende energie en een geschikte oriëntatie zijn.','Niet elke ontmoeting wordt een reactie.'],
['Temperatuur','Warmere deeltjes halen vaker de activeringsdrempel.','Bij hogere temperatuur hebben gemiddeld meer botsingen genoeg energie om de reactie op gang te brengen.','Een drempel wordt vaker overschreden.'],
['Katalysator','Een katalysator biedt een reactiepad met lagere activeringsenergie.','Hij versnelt de reactie zonder netto te worden verbruikt. Het verschil in energie tussen begin- en eindtoestand verandert niet.','Een gemakkelijker pad naar dezelfde bestemming.']]],
['3.6','Chemisch evenwicht','Twee richtingen tegelijk',[
['Dynamisch','In evenwicht stoppen de reacties niet.','De heen- en terugreactie blijven plaatsvinden, maar verlopen even snel. De concentraties blijven daardoor constant.','Een druk plein waar evenveel mensen binnenkomen als vertrekken.'],
['Evenwichtsconstante','Kc vat de verhouding van evenwichtsconcentraties samen.','Een grotere Kc wijst bij de gegeven temperatuur op relatief meer producten in het evenwicht. Gebruik de coëfficiënten als exponenten in de uitdrukking.','Een momentopname van de verdeling op evenwicht.'],
['Verstoring','Een evenwicht reageert op een verandering.','Bij extra reagens kan het systeem verschuiven in de richting die een deel van die toevoeging verbruikt. Dit is het principe van Le Chatelier.','Een duw verandert het evenwichtspunt.']]],
['3.7','Zuren en basen','Protonen op reis',[
['Zuur & base','Een Brønsted-zuur staat een proton af; een base neemt het op.','Na afstaan van H⁺ blijft de geconjugeerde base over. Zuur en geconjugeerde base vormen samen een koppel.','Volg waar het proton vandaan komt en naartoe gaat.'],
['pH','pH beschrijft de concentratie oxoniumionen op logaritmische schaal.','Bij 25 °C geldt pH = −log₁₀[H₃O⁺]. Een daling van één pH-eenheid betekent tienmaal zoveel H₃O⁺.','Een klein verschil op de schaal kan groot zijn in concentratie.'],
['Buffer & titratie','Een buffer dempt pH-verandering; een titratie volgt een reactie.','Een buffer bevat typisch een zwak zuur met zijn geconjugeerde base. Bij een sterk-zuur/sterk-base-titratie zie je rond het equivalentiepunt een scherpe pH-verandering.','De ene opstelling vangt verandering op; de andere meet ze.']]],
['3.8','Redoxreacties','Elektronen verplaatsen',[
['Oxidatie','Oxidatie is elektronen afstaan; reductie is elektronen opnemen.','Bij een redoxreactie verlopen beide tegelijk. De reductor staat elektronen af en de oxidator neemt ze op.','Elektronen kunnen niet verdwijnen in de boekhouding.'],
['Oxidatiegetal','Een oxidatiegetal helpt de elektronenverandering herkennen.','Stijgt het oxidatiegetal van een element, dan is dat element geoxideerd. Daalt het, dan is het gereduceerd.','Volg de getallen vóór en na de pijl.'],
['Cel','Een galvanische cel zet een spontane reactie om in elektrische energie.','Bij elektrolyse drijft externe elektrische energie een reactie aan die anders niet spontaan verloopt.','Reactie maakt stroom, of stroom stuurt reactie.']]],
['3.9','Koolstofchemie','Eenzelfde koolstof, veel mogelijkheden',[
['Koolstofskelet','Koolstof kan ketens en ringen vormen.','Een keten kan lineair, vertakt, verzadigd of onverzadigd zijn. Een dubbele binding verandert hoe het molecuul kan reageren.','De vorm van het skelet geeft al aanwijzingen.'],
['Functionele groep','Een kleine atoomgroep bepaalt vaak een groot deel van het gedrag.','Een alcohol heeft een hydroxylgroep, een carbonzuur een carboxylgroep. Namen en eigenschappen hangen samen met die groep.','Zoek eerst het herkenbare onderdeel.'],
['Isomeren','Dezelfde brutoformule kan meer dan één structuur voorstellen.','Bij plaatsisomerie staat een groep op een andere plaats; bij ketenisomerie vertakt de koolstofketen anders.','Dezelfde LEGO-stenen, een andere bouw.']]]]},
{ id:'biologie', name:'Biologie', icon:'✿', color:'#16815b', line:'Leven van dichtbij', chapters:[
['4.1','De cel als basiseenheid van het leven','Klein maar levend',[
['Elke cel','Cellen voeren processen uit die leven mogelijk maken.','Een cel heeft onder meer een begrenzing, erfelijk materiaal en stofwisseling. Organismen kunnen uit één of uit vele cellen bestaan.','De cel is een werkende eenheid, niet alleen een bouwsteen.'],
['Prokaryoot','Een prokaryote cel heeft geen membraanomhulde celkern.','Bij bacteriën ligt het DNA in een kerngebied van het cytoplasma. Ze hebben wel een celmembraan en ribosomen.','Geen celkern betekent niet: geen DNA.'],
['Eukaryoot','Een eukaryote cel heeft compartimenten met gespecialiseerde taken.','Het DNA ligt vooral in de celkern. Ook mitochondriën en andere membraangebonden organellen verdelen het werk.','Zoals verschillende kamers in een werkplaats.']]],
['4.2','De eukaryote cel: bouw en functie van celorganellen','Een rondleiding door de cel',[
['Celkern','De celkern bevat het grootste deel van het DNA.','De informatie in DNA wordt gebruikt om onder andere eiwitten te maken. Ribosomen bouwen die eiwitten; het endoplasmatisch reticulum en Golgi-apparaat verwerken en vervoeren er veel van.','Van instructie naar productie en verzending.'],
['Plant & dier','Plantencellen en dierlijke cellen delen veel organellen.','Een plantencel heeft daarnaast typisch een celwand, grote centrale vacuole en plastiden. Mitochondriën komen in beide voor.','Gedeelde basis, enkele herkenbare onderdelen.'],
['Membraantransport','Het membraan regelt de uitwisseling met de omgeving.','Diffusie gaat met een concentratieverschil mee. Actief transport kan tegen de gradiënt in werken en vraagt energie.','Sommige stoffen gaan vanzelf, andere hebben hulp nodig.']]],
['4.3','Stof- en energieomzettingen in eukaryote cellen','Wat voedt een cel?',[
['Moleculen','Sachariden, lipiden, eiwitten en nucleïnezuren hebben verschillende rollen.','Suikers kunnen energie leveren; lipiden zijn belangrijk voor membranen en opslag; eiwitten hebben veel bouw- en werktaken; nucleïnezuren dragen informatie.','Vier families, elk met eigen functies.'],
['Enzymen','Enzymen versnellen specifieke reacties in de cel.','Een enzym verlaagt de activeringsenergie en kan opnieuw worden gebruikt. De vorm van de actieve plaats beïnvloedt welke stoffen passen.','Een passende werkplek voor een reactie.'],
['ATP','Cellen koppelen energie vrijmaken aan energie gebruiken.','Bij aerobe celademhaling worden voedingsstoffen met zuurstof afgebroken en wordt ATP geproduceerd. ATP kan vervolgens celprocessen aandrijven.','ATP is een direct bruikbare energiedrager.']]],
['4.4','Celvermeerdering','Eén cel wordt meer',[
['Celcyclus','Een cel doorloopt groei, DNA-verdubbeling en deling.','Voor een deling wordt DNA gerepliceerd. Zo kan erfelijke informatie naar nieuwe cellen gaan.','Eerst kopiëren, dan verdelen.'],
['Mitose','Mitose levert doorgaans twee genetisch vrijwel identieke dochtercellen.','Na de scheiding van zusterchromatiden en de celdeling ontstaan twee cellen met hetzelfde chromosomenaantal als de moedercel.','Nuttig voor groei en herstel.'],
['Meiose','Meiose maakt geslachtscellen met de helft van het chromosomenaantal.','Homologe chromosomen kunnen stukjes uitwisselen bij crossing-over. Samen met de verdeling van chromosomen draagt dat bij aan variatie.','Halveren en herschikken.']]],
['4.5','Erfelijkheid','Van gen naar kenmerk',[
['Gen & allel','Een gen is een DNA-segment; allelen zijn varianten ervan.','Het genotype beschrijft de aanwezige allelen. Het fenotype is het waarneembare resultaat, mede beïnvloed door de omgeving.','Informatie en zichtbaar gevolg zijn niet hetzelfde.'],
['Overerving','Een nakomeling krijgt allelen van beide ouders.','Bij een eenvoudige dominant-recessieve overerving kan één dominant allel voldoende zijn voor het bijbehorende kenmerk. Andere patronen, zoals codominantie, zijn ook mogelijk.','Niet elk kenmerk volgt één simpel schema.'],
['Stamboom','Een stamboom helpt patronen door generaties volgen.','Kijk naar wie het kenmerk heeft, of het generaties overslaat en hoe het bij verschillende geslachten voorkomt. Zo kun je mogelijke overervingswijzen afleiden.','Een familieverhaal in symbolen.']]],
['4.6','Moleculaire genetica','De route van DNA naar eiwit',[
['DNA-code','De volgorde van basen bewaart informatie.','Bij transcriptie wordt informatie uit DNA in RNA overgeschreven. Na verwerking kan het mRNA als sjabloon dienen voor eiwitsynthese.','Een recept wordt eerst overgeschreven.'],
['Translatie','Een ribosoom leest mRNA in groepen van drie basen.','Een codon koppelt via de genetische code aan een aminozuur of stopteken. Zo groeit een polypeptideketen.','Drie letters tegelijk bepalen de volgende bouwsteen.'],
['Verandering','Mutaties en genregulatie beïnvloeden het eindresultaat.','Een mutatie verandert de DNA-sequentie; het effect kan klein, groot of afwezig zijn. Genregulatie bepaalt wanneer en hoeveel van een gen wordt afgelezen.','De tekst én hoe vaak hij wordt gelezen, tellen mee.']]],
['4.7','Menselijke voortplanting','Van geslachtscel tot geboorte',[
['Geslachtscellen','Meiose draagt bij aan eicellen en zaadcellen met een haploïde kern.','Bij bevruchting versmelten de kernen van een eicel en een zaadcel. De zygote heeft opnieuw een diploïde chromosomenset.','Twee halve sets vormen samen een volledige set.'],
['Hormonen','Hormonen coördineren de cyclus en de vruchtbaarheid.','FSH en LH sturen processen in de gonaden; oestrogenen en progesteron beïnvloeden onder meer het baarmoederslijmvlies.','Signalen tussen hersenen en voortplantingsorganen.'],
['Ontwikkeling','Na bevruchting volgen delingen, innesteling en verdere groei.','De placenta ondersteunt uitwisseling van stoffen tussen moeder en embryo of foetus via hun gescheiden bloedcirculaties.','Een uitwisselingsplaats, geen samensmelting van beide bloedstromen.']]],
['4.8','Aangeboren en verworven immuniteit','Een gelaagde verdediging',[
['Aangeboren','De aangeboren afweer reageert snel en breed.','Barrières en cellen zoals macrofagen herkennen algemene kenmerken van indringers en kunnen ze opruimen.','Een snelle eerste reactie.'],
['Verworven','Lymfocyten kunnen specifiek reageren op antigenen.','B-cellen kunnen antilichamen maken; geheugen na blootstelling kan een latere reactie sneller maken.','Een gerichte verdediging met geheugen.'],
['Bloedgroepen','ABO en rhesus beschrijven antigenen op rode bloedcellen.','Bij een onverenigbare transfusie kan het immuunsysteem reageren. Daarom worden bloedgroepen en compatibiliteit gecontroleerd.','Een label op de cel kan door afweer worden herkend.']]],
['4.9','Prikkels ontvangen en verwerken','Van signaal naar reactie',[
['Bloedsuiker','Insuline en glucagon helpen de bloedglucose regelen.','Insuline bevordert onder meer opname en opslag van glucose; glucagon helpt glucose beschikbaar te maken.','Twee signalen sturen dezelfde balans in andere richting.'],
['Reflex','Een reflexboog verbindt prikkel en reactie via zenuwcellen.','Een receptor neemt de prikkel waar, zenuwimpulsen worden doorgegeven en een effector zoals een spier reageert.','Je trekt je hand terug voordat je bewust nadenkt.'],
['Spier','Spiercontractie vraagt energie en zet het skelet in beweging.','Skeletspieren werken via pezen op botten. Bij contractie gebruiken spiercellen ATP; verschillende spiertypes hebben verschillende taken.','Een spier trekt, een bot beweegt mee.']]],
['4.10','Evolutie','Verandering over generaties',[
['Variatie','Individuen in een populatie verschillen van elkaar.','Mutatie en recombinatie kunnen erfelijke variatie leveren. De omgeving beïnvloedt welke varianten zich beter voortplanten.','Selectie kan alleen werken als er verschillen zijn.'],
['Selectie','Natuurlijke selectie verandert de frequentie van erfelijke varianten.','Individuen met een in die omgeving gunstige erfelijke eigenschap kunnen gemiddeld meer nakomelingen krijgen. Populaties veranderen over generaties.','Niet één dier evolueert plots; populaties veranderen.'],
['Soortvorming','Langdurige isolatie kan populaties uiteen laten groeien.','Als genenuitwisseling wegvalt, kunnen verschillen zich opstapelen. Uiteindelijk kan voortplanting tussen groepen niet meer mogelijk zijn.','Gescheiden routes kunnen ver uit elkaar eindigen.']]]]}];

// Verdieping bij de KIW-verkenning: twee aanvullende haltes en een uitgewerkt voorbeeld per hoofdstuk.
window.KIW_EXTRA = {
'1.1': {person:['Al-Chwarizmi','Deze wiskundige werkte in de 9e eeuw systematisch met vergelijkingen. Het woord algebra is verbonden met zijn boek over al-jabr.'], more:[
['Balans bewaren','Een vergelijking los je op met bewerkingen die het evenwicht bewaren.','Bij 2x + 4 = 12 trek je eerst aan beide kanten 4 af. Daarna deel je beide kanten door 2: x = 4. Controleer door terug in te vullen.','Elke stap geldt voor beide kanten.'],
['Factoren vinden','Een product is nul als minstens één factor nul is.','Bij (x − 2)(x + 3) = 0 zijn de mogelijkheden x = 2 of x = −3. Dit principe helpt bij tweedegraadsvergelijkingen en veeltermen.','Breek een grote vergelijking op in kleine nulproblemen.']],
exercise:['Los op: 3(x − 2) = 12.','Deel beide kanten door 3: x − 2 = 4. Tel vervolgens aan beide kanten 2 op.','x = 6. Controle: 3(6 − 2) = 12.']},
'1.2': {person:['Euclides','Zijn Elementen bracht meetkundige redeneringen bijeen en maakte bewijzen vanuit uitgangspunten beroemd.'], more:[
['Pythagoras','In een rechthoekige driehoek hangen de drie zijden samen.','Als a en b de rechthoekszijden zijn en c de schuine zijde is, dan a² + b² = c². De schuine zijde ligt tegenover de rechte hoek.','Zoek eerst de hoek van 90°.'],
['Helling herkennen','De helling van een rechte beschrijft de verticale verandering per horizontale stap.','Voor de lijn y = 2x + 1 ga je bij een stap van 1 naar rechts 2 omhoog. Twee rechten met dezelfde helling zijn evenwijdig.','De coefficient van x bepaalt de richting.']],
exercise:['Een rechthoekige driehoek heeft rechthoekszijden van 3 cm en 4 cm. Hoe lang is de schuine zijde?','Gebruik c² = 3² + 4² = 9 + 16 = 25. Neem de positieve wortel omdat lengte positief is.','c = 5 cm.']},
'1.3': {person:['Newton en Leibniz','Zij ontwikkelden in de 17e eeuw onafhankelijk belangrijke onderdelen van de differentiaal- en integraalrekening.'], more:[
['Raaklijn','De afgeleide in één punt is de helling van de raaklijn daar.','Voor f(x) = x² is f′(x) = 2x. Bij x = 3 is de helling dus 6, ook al is de functiewaarde f(3) = 9.','Functiewaarde en helling beantwoorden andere vragen.'],
['Oppervlakte optellen','Een integraal telt kleine oppervlaktes met teken op.','Voor f(x) = x van x = 0 tot x = 2 is de oppervlakte van de driehoek ½ × 2 × 2 = 2. De bepaalde integraal heeft hier dezelfde waarde.','Tellen over een heel interval.']],
exercise:['Bepaal de helling van f(x) = x² bij x = 4.','Differentieer eerst: f′(x) = 2x. Vul daarna x = 4 in.','De helling is f′(4) = 8.']},
'1.4': {person:['Pascal en Fermat','Hun briefwisseling over kansspelen droeg bij aan de ontwikkeling van de kansrekening.'], more:[
['Zonder terugleggen','Een eerste trekking kan de kans bij de volgende trekking veranderen.','In een zak met drie rode en twee blauwe knikkers zijn er na een rode trekking nog twee rode op vier knikkers. De tweede kans is dus niet opnieuw 3/5.','De inhoud van de zak verandert.'],
['Kans als oppervlakte','Bij een continue verdeling lees je kansen af als gebieden.','Onder de volledige normaalcurve ligt oppervlakte 1. Ongeveer 68% ligt bij een normale verdeling binnen één standaardafwijking van het gemiddelde.','Een deel van de oppervlakte is een deel van alle gevallen.']],
exercise:['Er zitten 3 rode en 2 blauwe knikkers in een zak. Trek twee keer zonder terugleggen. Wat is de kans op twee rode?','De eerste kans is 3/5. Daarna zijn er 2 rode van de 4 knikkers: 2/4. Vermenigvuldig langs de kansboomtak.','3/5 × 2/4 = 3/10 = 30%.']},
'2.1': {person:['Blaise Pascal','Hij onderzocht druk in vloeistoffen. De drukeenheid pascal (Pa) is naar hem genoemd.'], more:[
['Eenheden controleren','Druk meet je in newton per vierkante meter.','p = F/A. Eén N/m² is precies één pascal. Zet cm² eerst om naar m²: 100 cm² = 0,01 m².','De juiste eenheid is deel van je berekening.'],
['Op diepte','In een vloeistof telt de luchtdruk bovenop de hydrostatische druk.','Voor een vloeistof op diepte h is de totale druk p = p₀ + ρgh. De formule ρgh alleen geeft de extra druk door de vloeistofkolom.','Boven de vloeistof is er vaak al druk.']],
exercise:['Een kracht van 100 N werkt op 0,02 m². Bereken de druk.','Gebruik p = F/A. Deel 100 N door 0,02 m².','p = 5 000 Pa = 5 kPa.']},
'2.2': {person:['Robert Boyle','Hij beschreef bij constante temperatuur een omgekeerd verband tussen druk en volume van een gas.'], more:[
['Constante temperatuur','Bij dezelfde hoeveelheid gas en constante temperatuur is pV constant.','Als het volume halveert, moet de druk verdubbelen zodat het product gelijk blijft. Dit is een bijzonder geval van de gaswetten.','Een kleiner volume betekent vaker botsingen tegen de wand.'],
['Warmte versus temperatuur','Warmte is energieoverdracht; temperatuur beschrijft de thermische toestand.','Twee kopjes water van 50 °C hebben dezelfde temperatuur als één kopje, maar samen meer massa en meer interne energie. Voor opwarmen zonder faseovergang geldt Q = mcΔT.','Even warm is niet hetzelfde als evenveel energie.']],
exercise:['Een gas heeft bij constante temperatuur p₁ = 100 kPa en V₁ = 2 L. Wat is de druk als V₂ = 1 L?','Gebruik p₁V₁ = p₂V₂. Dus p₂ = 100 × 2 / 1 kPa.','p₂ = 200 kPa.']},
'2.3': {person:['Charles-Augustin de Coulomb','De wet van Coulomb beschrijft hoe de elektrische kracht tussen puntladingen afhangt van lading en afstand.'], more:[
['Afstand in het kwadraat','Op dubbele afstand wordt de kracht viermaal kleiner.','In F = k|q₁q₂|/r² staat r² in de noemer. Verdubbel r en de noemer wordt viermaal zo groot.','De kracht spreidt zich met afstand sterk uit.'],
['Richting tekenen','Bij ladingen helpen pijlen om de resultante te vinden.','Teken per lading eerst de kracht of het veld op de plaats die je onderzoekt. Tel pas daarna de vectoren op; tegengestelde pijlen kunnen elkaar deels opheffen.','Grootte zonder richting is niet genoeg.']],
exercise:['De afstand tussen twee puntladingen wordt verdubbeld. Hoe verandert de grootte van de Coulombkracht?','De kracht is omgekeerd evenredig met r². Vervang r door 2r: (2r)² = 4r².','De kracht wordt viermaal kleiner: Fnieuw = Foud/4.']},
'2.4': {person:['Georg Ohm','Zijn onderzoek verbond spanning, stroomsterkte en weerstand. De eenheid ohm draagt zijn naam.'], more:[
['Meten in een kring','Een ampèremeter zet je in serie, een voltmeter over een component.','Een ideale ampèremeter heeft verwaarloosbare weerstand en onderbreekt de stroomweg niet. Een ideale voltmeter trekt geen stroom en staat parallel over het te meten deel.','Stroom meten in de route; spanning meten tussen twee punten.'],
['Vermogen','Een elektrisch toestel zet per seconde een hoeveelheid energie om.','P = UI. Met de wet van Ohm kun je voor een ohmse weerstand ook P = I²R of P = U²/R gebruiken. Een watt is één joule per seconde.','Vermogen zegt hoe snel energie wordt omgezet.']],
exercise:['Een weerstand van 6 Ω staat op 12 V. Bereken de stroom en het vermogen.','I = U/R = 12/6 = 2 A. Daarna P = UI = 12 × 2.','I = 2 A en P = 24 W.']},
'2.5': {person:['Michael Faraday en Heinrich Lenz','Faraday onderzocht elektromagnetische inductie; de wet van Lenz geeft de richting van het geïnduceerde effect.'], more:[
['Spoel en stroom','Stroom door een spoel maakt een magnetisch veld.','Meer windingen per lengte en een grotere stroom versterken in een lange ideale solenoïde het veld. Binnen zo’n spoel is het veld ongeveer homogeen.','Veel lussen versterken elkaars veld.'],
['Verandering telt','Een stilstaande magneet bij een stilstaande spoel geeft geen blijvende inductiespanning.','Inductie vraagt verandering van de magnetische flux door de spoel. Beweeg de magneet of verander het veld en er kan spanning ontstaan.','Een veld op zich is niet hetzelfde als een veranderend veld.']],
exercise:['Een magneet beweegt naar een spoel toe. Wat doet de geïnduceerde stroom volgens Lenz?','De magnetische flux door de spoel verandert. Bepaal de richting zo dat het veld door de opgewekte stroom de verandering tegenwerkt.','Het geïnduceerde effect werkt de toename van de magnetische flux tegen.']},
'2.6': {person:['Henri Becquerel en Marie Curie','Becquerel ontdekte natuurlijke radioactiviteit; Curie onderzocht radioactieve stoffen verder.'], more:[
['Kernnotatie','Het massagetal is niet hetzelfde als het atoomnummer.','Bij ¹⁴₆C zijn er 6 protonen en 14 − 6 = 8 neutronen. Bij een neutraal atoom zijn er ook 6 elektronen.','Lees Z onderaan en A bovenaan.'],
['Exponentieel verval','Elke halveringstijd halveert wat nog niet vervallen is.','Na n halveringstijden blijft van N₀ gemiddeld N = N₀(1/2)ⁿ over. Dat is geen rechte lijn: de absolute afname wordt telkens kleiner.','Halveer de rest, niet telkens het begin.']],
exercise:['Een monster begint met 80 mg radioactieve stof. Hoeveel blijft gemiddeld over na drie halveringstijden?','Na één: 40 mg. Na twee: 20 mg. Na drie: 10 mg.','Gemiddeld 10 mg van de oorspronkelijke radioactieve stof.']},
'2.7': {person:['Galileo Galilei','Hij onderzocht beweging en versnelling en hielp de beschrijving van vallende voorwerpen veranderen.'], more:[
['Grafiek lezen','De helling van x(t) geeft snelheid; de helling van v(t) geeft versnelling.','De oppervlakte onder een v(t)-grafiek geeft de verplaatsing over dat tijdsinterval. Let op het teken als de snelheid negatief wordt.','Helling en oppervlakte vertellen verschillende dingen.'],
['Beginsnelheid','Met constante versnelling verandert snelheid lineair met de tijd.','v = v₀ + at en Δx = v₀t + ½at². Kies één positieve richting en houd dat teken voor v₀ en a vol.','Een tekenafspraak voorkomt verwarring.']],
exercise:['Een fietser start vanuit rust en versnelt gelijkmatig tot 20 m/s in 5 s. Bereken a en de afgelegde afstand.','a = Δv/Δt = 20/5 = 4 m/s². De gemiddelde snelheid is (0 + 20)/2 = 10 m/s; vermenigvuldig met 5 s.','a = 4 m/s² en afstand = 50 m.']},
'2.8': {person:['Isaac Newton','Zijn bewegingswetten koppelen krachten aan verandering van beweging.'], more:[
['Krachtenschema','Teken alle krachten op één gekozen voorwerp.','Een boek op tafel heeft bijvoorbeeld zwaartekracht naar beneden en normaalkracht naar boven. Als het in rust is, is de vectoriële som nul.','Kies eerst welk voorwerp je bekijkt.'],
['Energieboekhouding','Mechanische energie blijft behouden zolang er geen dissipatieve invloed is.','Bij wrijving gaat een deel van de mechanische energie naar onder meer warmte. De totale energie verdwijnt niet, maar verandert van vorm.','Noteer begin, einde en eventuele verliezen.']],
exercise:['Een voorwerp van 3 kg ondervindt een nettokracht van 12 N. Wat is de versnelling?','Gebruik ΣF = ma. Deel 12 N door 3 kg.','a = 4 m/s² in de richting van de nettokracht.']},
'2.9': {person:['Christiaan Huygens','Zijn golftheorie leverde een manier om voortplanting en verschijnselen van licht te begrijpen.'], more:[
['Frequentie en periode','Een hoge frequentie betekent een korte periode.','f = 1/T. Een trilling met T = 0,2 s heeft f = 5 Hz en herhaalt zich vijfmaal per seconde.','Eén cyclus duurt minder als er meer in één seconde passen.'],
['Snelheid van een golf','Frequentie en golflengte bepalen samen de voortplantingssnelheid.','v = fλ. Als een golf bij gelijke voortplantingssnelheid een hogere frequentie krijgt, wordt de golflengte kleiner.','Meer golfkammen per seconde betekent kortere afstand ertussen.']],
exercise:['Een golf heeft frequentie 5 Hz en golflengte 2 m. Wat is de golfsnelheid?','Gebruik v = fλ. Vermenigvuldig 5 s⁻¹ met 2 m.','v = 10 m/s.']},
'2.10': {person:['Heinrich Hertz','De frequentie-eenheid hertz (Hz) draagt zijn naam; ze gebruik je ook om de toonhoogte van geluid te beschrijven.'], more:[
['Toon en luidheid','Frequentie en intensiteit beschrijven verschillende eigenschappen.','Een hogere frequentie klinkt doorgaans als een hogere toon. Een grotere geluidsintensiteit hangt samen met een hoger geluidsniveau.','Een hoog geluid hoeft niet luid te zijn.'],
['Logaritmisch vergelijken','Een factor tien in intensiteit is een verschil van 10 dB.','Voor twee intensiteiten geldt ΔL = 10 log₁₀(I₂/I₁). Een factor honderd geeft dus 20 dB verschil.','Honderd is tien maal tien: twee stappen van 10 dB.']],
exercise:['Een geluidsintensiteit wordt 100 keer zo groot. Hoeveel stijgt het geluidsniveau?','ΔL = 10 log₁₀(100). Omdat log₁₀(100) = 2, is ΔL = 20.','Het geluidsniveau stijgt met 20 dB.']},
'3.1': {person:['Antoine Lavoisier','Hij legde grote nadruk op het behoud van massa bij chemische reacties.'], more:[
['Atomen tellen','Een reactievergelijking moet aan beide kanten evenveel atomen van elk element bevatten.','Verander alleen de coëfficiënten vóór een formule; verander de kleine indices in de stofnaam niet. 2 Mg + O₂ → 2 MgO is in balans.','Verander hoeveel pakketjes, niet wat er in een pakketje zit.'],
['Scheiden of reageren','Bij scheiden ontstaan geen nieuwe stoffen; bij een reactie wel.','Verdamping kan zout en water uit elkaar halen. Verbranding verandert de betrokken stoffen en maakt nieuwe reactieproducten.','Kijk of de chemische identiteit verandert.']],
exercise:['Maak de reactie Mg + O₂ → MgO kloppend.','Links staan twee O-atomen. Plaats daarom 2 voor MgO. Daarna zijn rechts twee Mg-atomen, dus plaats 2 voor Mg.','2 Mg + O₂ → 2 MgO.']},
'3.2': {person:['Dmitri Mendelejev','Hij ordende elementen tot een periodiek systeem en voorspelde eigenschappen van nog onbekende elementen.'], more:[
['Neutronen rekenen','Het aantal neutronen vind je met A − Z.','In natrium-23 is Z = 11 en A = 23. Het atoom bevat dus 11 protonen en 12 neutronen.','Massagetal telt beide kerndeeltjes samen.'],
['Ionvorming','Een ion ontstaat als het aantal elektronen verandert.','Na verliest natrium één elektron en wordt Na⁺. Het aantal protonen blijft 11; een verandering van protonen zou het element veranderen.','De lading verandert, de identiteit van het element niet.']],
exercise:['Natrium-23 heeft Z = 11. Hoeveel protonen, neutronen en elektronen bevat een neutraal atoom?','Protonen = Z = 11. Neutronen = A − Z = 23 − 11 = 12. Neutraal betekent evenveel elektronen als protonen.','11 protonen, 12 neutronen en 11 elektronen.']},
'3.3': {person:['Gilbert N. Lewis','Zijn stipnotatie maakt valentie-elektronen en gedeelde elektronenparen zichtbaar.'], more:[
['Elektronegativiteit','De aantrekking van gedeelde elektronen kan ongelijk zijn.','In een polaire binding trekken de atomen niet even sterk aan het elektronenpaar. Of het hele molecuul polair is, hangt daarnaast af van de vorm.','Bindingen zijn pijlen die elkaar soms opheffen.'],
['Vorm telt','Een symmetrische vorm kan polaire bindingen laten compenseren.','CO₂ heeft polaire C=O-bindingen, maar het molecuul is lineair. De twee bindingsdipolen werken in tegengestelde richting en heffen elkaar op.','Twee even sterke pijlen in tegengestelde richting.']],
exercise:['Waarom is H₂O als molecuul polair en CO₂ niet?','Bekijk zowel de bindingspolariteit als de vorm: water is gebogen; koolstofdioxide is lineair en symmetrisch.','In H₂O heffen de bindingsdipolen elkaar niet op; in CO₂ wel.']},
'3.4': {person:['Amedeo Avogadro','Zijn naam is verbonden met het aantal deeltjes in één mol.'], more:[
['Eenheden combineren','Massa, mol en volume horen bij verschillende grootheden.','n = m/M zet gram om naar mol. c = n/V zet mol en liter oplossing om naar mol/L. Schrijf eenheden mee zodat je ziet wat je uitrekent.','Eenheden helpen je de route te kiezen.'],
['Verdunnen','Bij verdunnen blijft de hoeveelheid opgeloste stof dezelfde.','Als vóór en na verdunnen dezelfde opgeloste stof aanwezig blijft, geldt c₁V₁ = c₂V₂. Volume verdubbelen halveert de concentratie.','Meer oplosmiddel verspreidt dezelfde hoeveelheid stof.']],
exercise:['Los 0,20 mol stof op tot 0,50 L oplossing. Wat is de molaire concentratie?','Gebruik c = n/V = 0,20 mol / 0,50 L.','c = 0,40 mol/L.']},
'3.5': {person:['Svante Arrhenius','Hij werkte aan de relatie tussen temperatuur en reactiesnelheid, beschreven in de vergelijking van Arrhenius.'], more:[
['Energiediagram','Een reactie moet eerst over een energiedrempel.','De activeringsenergie is het verschil tussen de energie van de uitgangsstoffen en de top van het pad. De reactie-energie vergelijkt begin en einde.','De heuveltop is niet hetzelfde als het hoogteverschil tussen begin en eind.'],
['Concentratie','Meer reagerende deeltjes per volume levert doorgaans meer botsingen.','De werkelijke snelheidswet bepaal je uit metingen; je mag de exponenten niet zomaar aflezen uit de reactievergelijking.','Stoichiometrie en snelheidswet zijn verschillende informatie.']],
exercise:['Een katalysator verlaagt de activeringsenergie. Verandert de reactie-energie tussen begin en eind?','Een katalysator verandert het reactiepad, maar niet de energieniveaus van uitgangsstoffen en reactieproducten.','Nee. De activeringsenergie daalt; het energieverschil tussen begin en eind blijft gelijk.']},
'3.6': {person:['Henri Le Chatelier','Zijn principe helpt voorspellen hoe een systeem in evenwicht reageert op een verstoring.'], more:[
['Kc opbouwen','Productconcentraties komen bovenaan, reagentia onderaan.','Bij aA + bB ⇌ cC is Kc = [C]ᶜ / ([A]ᵃ[B]ᵇ). De coëfficiënten worden exponenten.','Schrijf de reactie eerst netjes uit.'],
['Evenwicht verschuift','Het systeem past zich aan wanneer je de omstandigheden verandert.','Bij toevoeging van een reagens kan de heenreactie tijdelijk sterker worden totdat een nieuw evenwicht is bereikt. Bij constante temperatuur blijft Kc zelf gelijk.','Een andere samenstelling kan bij dezelfde Kc horen.']],
exercise:['Voor H₂ + I₂ ⇌ 2 HI geldt [HI] = 0,40 mol/L en [H₂] = [I₂] = 0,20 mol/L in evenwicht. Bereken Kc.','Kc = [HI]² / ([H₂][I₂]) = 0,40² / (0,20 × 0,20).','Kc = 4.']},
'3.7': {person:['Johannes Brønsted en Thomas Lowry','Zij beschreven zuren als protondonoren en basen als protonacceptoren.'], more:[
['Tientallen in pH','Eén pH-eenheid komt overeen met een factor tien in [H₃O⁺].','Een oplossing met pH 3 heeft bij gebruik van de gebruikelijke concentratiebenadering [H₃O⁺] = 10⁻³ mol/L. Bij pH 4 is dit 10⁻⁴ mol/L.','Een hogere pH betekent hier minder oxoniumionen.'],
['Sterkte of concentratie','Een sterk zuur en een geconcentreerd zuur betekenen iets anders.','Sterkte gaat over de mate van protonafgifte in water; concentratie over de hoeveelheid opgelost zuur per volume. Een sterk zuur kan sterk verdund zijn.','Vraag: hoe volledig reageert het, of hoeveel is aanwezig?']],
exercise:['Hoe groot is [H₃O⁺] bij pH = 3? Gebruik de concentratiebenadering.','pH = −log₁₀[H₃O⁺]. Draai om: [H₃O⁺] = 10⁻ᵖᴴ.','[H₃O⁺] = 10⁻³ mol/L.']},
'3.8': {person:['Alessandro Volta','Zijn elektrische stapel was een vroege galvanische batterij die chemische reacties en elektrische stroom verbond.'], more:[
['Elektronenboekhouding','Verloren elektronen moeten elders gewonnen worden.','Zn → Zn²⁺ + 2e⁻ is oxidatie; Cu²⁺ + 2e⁻ → Cu is reductie. Optellen geeft Zn + Cu²⁺ → Zn²⁺ + Cu.','Schrap de elektronen pas als links en rechts evenveel voorkomen.'],
['Twee elektroden','In een galvanische cel lopen elektronen door de buitenkring.','Oxidatie gebeurt aan de anode, reductie aan de kathode. De zoutbrug helpt ladingsopbouw in de oplossingen tegen te gaan.','Oxidatie en reductie vinden op verschillende plaatsen plaats.']],
exercise:['In Zn + Cu²⁺ → Zn²⁺ + Cu: welke stof oxideert en welke reduceert?','Zn gaat van oxidatiegetal 0 naar +2 en staat elektronen af. Cu²⁺ gaat van +2 naar 0 en neemt elektronen op.','Zn wordt geoxideerd; Cu²⁺ wordt gereduceerd.']},
'3.9': {person:['August Kekulé','Hij droeg bij aan de beschrijving van de structuur van organische moleculen, waaronder benzeen.'], more:[
['Naam ontleden','De stam beschrijft de koolstofketen; het achtervoegsel een stofklasse.','Propan-1-ol heeft drie C-atomen en een OH-groep op C-atoom 1. But-2-een heeft vier C-atomen en een dubbele binding vanaf C-atoom 2.','Lees de naam als een bouwinstructie.'],
['Isomeer herkennen','Eerst dezelfde brutoformule controleren, dan de structuur vergelijken.','Butaan en 2-methylpropaan hebben beide C₄H₁₀. De tweede koolstofketen is vertakt: ketenisomerie.','Gelijke aantallen atomen, andere verbindingen.']],
exercise:['Geef de naam van CH₃–CH(CH₃)–CH₃.','De langste keten telt drie C-atomen: propaan. Er zit een methylgroep op koolstof 2.','2-methylpropaan.']},
'4.1': {person:['Robert Hooke','Hij gebruikte in 1665 het woord cellen voor kleine vakjes die hij in kurk zag.'], more:[
['DNA zonder kern','Bacteriën kunnen DNA hebben zonder celkern.','Hun erfelijk materiaal ligt in een kerngebied zonder omhullend kernmembraan. Dat helpt prokaryoten onderscheiden van eukaryoten.','Geen celkern is niet hetzelfde als geen erfelijk materiaal.'],
['Gedeelde basis','Beide celtypes hebben een membraan, cytoplasma, DNA en ribosomen.','Die onderdelen zijn een nuttiger startpunt dan alleen zoeken naar verschillen. Verschillen in organisatie volgen daarna.','Eerst herkennen wat alle cellen gemeen hebben.']],
exercise:['Een cel heeft DNA, ribosomen en een celmembraan, maar geen membraanomhulde celkern. Welk celtype past hierbij?','Kijk naar de celkern: DNA is aanwezig, maar niet in een afgesloten kern.','Een prokaryote cel, bijvoorbeeld een bacterie.']},
'4.2': {person:['Camillo Golgi','Het Golgi-apparaat, betrokken bij verwerking en sortering van celproducten, draagt zijn naam.'], more:[
['Productieroute','Veel eiwitten leggen een route door de cel af.','Ribosomen aan het ruw endoplasmatisch reticulum maken onder meer eiwitten bestemd voor secretie. Het Golgi-apparaat verwerkt en sorteert ze verder.','Van werkbank naar sorteercentrum.'],
['Osmose','Water verplaatst zich door een semipermeabel membraan naar een gebied met hogere concentratie opgeloste deeltjes.','Bij een hogere concentratie opgeloste stoffen buiten een dierlijke cel verlaat netto water de cel; de cel kan krimpen.','Water volgt het verschil in opgeloste stof.']],
exercise:['Een dierlijke cel komt in een oplossing met veel meer opgeloste stof dan in de cel. Wat gebeurt er met water?','Het membraan laat water door. De omgeving is hypertoon ten opzichte van de cel.','Netto water beweegt naar buiten; de cel krimpt.']},
'4.3': {person:['Hans Krebs','De citroenzuurcyclus, een onderdeel van de aerobe energiehuishouding, is ook naar hem genoemd.'], more:[
['Opbouw en afbraak','Anabolisme bouwt op; katabolisme breekt af.','De opbouw van grotere moleculen vraagt meestal energie. Afbraak van energierijke voedingsstoffen kan energie beschikbaar maken voor ATP-productie.','Bouwen kost, afbreken kan leveren.'],
['Wel of geen zuurstof','Het aanbod van zuurstof beïnvloedt welk proces de cel kan gebruiken.','Bij aerobe celademhaling werkt zuurstof als eindacceptor van elektronen. Sommige cellen kunnen bij zuurstofgebrek tijdelijk ATP via anaerobe routes blijven vormen, met lagere ATP-opbrengst per glucose.','De route naar energie verandert met de omstandigheden.']],
exercise:['Een cel bouwt eiwitten uit aminozuren op. Is dat anabolisme of katabolisme?','Een groter molecuul ontstaat uit kleinere bouwstenen.','Anabolisme: een opbouwend proces dat energie vraagt.']},
'4.4': {person:['Walther Flemming','Hij beschreef en tekende het proces van mitose bij cellen.'], more:[
['Wat scheidt?','Mitose en meiose verdelen chromosomen op verschillende manieren.','Bij mitose worden zusterchromatiden verdeeld. In meiose I gaan eerst homologe chromosomen uit elkaar; in meiose II scheiden zusterchromatiden.','Vergelijk wat er in elke ronde uit elkaar gaat.'],
['Aantal chromosomen','Tel het aantal chromosomen per cel, niet het aantal DNA-strengen.','Bij de mens hebben gewone lichaamscellen normaal 46 chromosomen. Geslachtscellen hebben normaal 23; na bevruchting zijn het er weer 46.','Replicatie verdubbelt DNA, niet meteen het chromosomenaantal.']],
exercise:['Een menselijke lichaamscel heeft 46 chromosomen. Hoeveel chromosomen hebben een normale geslachtscel en een zygote na bevruchting?','Meiose halveert het aantal tot 23. Bij bevruchting komen twee geslachtscellen samen: 23 + 23.','Geslachtscel: 23. Zygote: 46 chromosomen.']},
'4.5': {person:['Gregor Mendel','Met kruisingen bij erwtenplanten beschreef hij regelmatigheden in de overerving van kenmerken.'], more:[
['Gameten opschrijven','Een diploïd individu geeft per gen meestal één van zijn twee allelen door.','Een heterozygoot Aa kan gameten met A of a vormen. Een homozygoot aa geeft voor dat gen steeds a door.','Halveer eerst de allelen van elke ouder.'],
['Kruisingstabel','Combineer de mogelijke gameten, niet de volledige oudergenotypes ineens.','Bij Aa × aa ontstaan de combinaties Aa en aa in gelijke verhouding, aangenomen dat beide gametentypes even vaak voorkomen.','Elke vakje combineert één bijdrage van elke ouder.']],
exercise:['Bij dominante overerving: wat zijn de verwachte genotypes uit Aa × aa?','Ouder 1 geeft A of a door; ouder 2 geeft a door. Combineer: Aa of aa.','50% Aa en 50% aa in de verwachte verdeling.']},
'4.6': {person:['Rosalind Franklin, James Watson en Francis Crick','Röntgendiffractiewerk, waaronder dat van Franklin, was belangrijk voor het model van de DNA-dubbelhelix dat Watson en Crick voorstelden.'], more:[
['Drie basen per codon','Tijdens translatie wordt mRNA in codons gelezen.','Een codon bestaat uit drie basen. AUG kan als startcodon dienen; UAA, UAG en UGA zijn stopcodons. Het leesraam bepaalt welke groepjes ontstaan.','Een verschuiving van één letter verschuift alle daaropvolgende groepjes.'],
['Mutatie-effect','Niet elke DNA-verandering geeft een ander eiwit.','Door de redundantie van de genetische code kan een basenverandering soms voor hetzelfde aminozuur coderen. Een ander codon kan ook een stopteken of ander aminozuur geven.','Dezelfde wijziging kan verschillende gevolgen hebben.']],
exercise:['De coderende DNA-streng is 5′-ATG-GAA-TAA-3′. Wat is de overeenkomstige mRNA-sequentie?','De mRNA-volgorde is gelijk aan die van de coderende streng, maar U staat waar in DNA T staat.','5′-AUG-GAA-UAA-3′. AUG is start en UAA is stop.']},
'4.7': {person:['Karl Ernst von Baer','Hij beschreef in de 19e eeuw de eicel bij zoogdieren en droeg bij aan de embryologie.'], more:[
['Cyclus begrijpen','Een cyclus wordt door een samenspel van hormonen geregeld.','FSH ondersteunt follikelontwikkeling; de LH-piek gaat vooraf aan de eisprong. Na de eisprong draagt progesteron bij aan het behoud van een voorbereid baarmoederslijmvlies.','Volg de volgorde van signalen.'],
['Moeder en foetus','Placenta en navelstreng ondersteunen uitwisseling tijdens de zwangerschap.','Zuurstof en voedingsstoffen kunnen via de placenta naar de foetus worden overgedragen; afvalstoffen de andere richting uit. Het bloed van moeder en foetus blijft gewoonlijk gescheiden.','Contact voor uitwisseling zonder één gezamenlijke bloedbaan.']],
exercise:['Een eicel met 23 chromosomen versmelt met een zaadcel met 23 chromosomen. Hoeveel telt de zygote normaal?','Tel de haploïde chromosomensets van beide geslachtscellen op: 23 + 23.','Normaal 46 chromosomen.']},
'4.8': {person:['Louis Pasteur','Zijn werk aan vaccinatie en ziekteverwekkers droeg bij aan de ontwikkeling van immunologie.'], more:[
['Actief of passief','Actieve immunisatie laat je eigen afweer reageren; passieve immunisatie geeft kant-en-klare antistoffen.','Bij een vaccin bouwt het lichaam zelf een afweerreactie op. Toediening van antistoffen werkt sneller, maar geeft doorgaans geen eigen langdurig immunologisch geheugen.','Zelf leren reageren tegenover hulp van buitenaf ontvangen.'],
['Antigenen op bloed','Bloedgroep A draagt A-antigenen op rode bloedcellen.','Iemand met bloedgroep A heeft doorgaans anti-B-antistoffen in het plasma. Daarom is zomaar B-rodebloedcellen toedienen onverenigbaar.','Het immuunsysteem herkent het vreemde B-label.']],
exercise:['Waarom zijn B-rodebloedcellen doorgaans onverenigbaar met een ontvanger met bloedgroep A?','De B-cellen dragen B-antigenen. De ontvanger met groep A heeft doorgaans anti-B-antistoffen.','Die antistoffen kunnen reageren met de B-rodebloedcellen. In de praktijk zijn ook rhesus en compatibiliteitstests belangrijk.']},
'4.9': {person:['Charles Sherrington','Hij onderzocht reflexen en gebruikte het begrip synaps voor de verbinding tussen zenuwcellen.'], more:[
['Signaalvolgorde','Een reflexboog heeft een duidelijke volgorde van stappen.','Receptor → sensibel neuron → centraal zenuwstelsel → motorisch neuron → effector. Bij elke stap blijft de informatie doorgegeven tot een reactie ontstaat.','Volg de prikkel als een route door het lichaam.'],
['Spieren vergelijken','Skeletspier, hartspier en gladde spier hebben andere taken.','Skeletspier beweegt het skelet; hartspier pompt bloed; gladde spier zit onder meer in de darmwand. Ze verschillen in aansturing en bouw.','De plaats helpt je het type herkennen.']],
exercise:['Je raakt een hete pan aan en trekt je hand terug. Zet de route in volgorde.','Begin waar de prikkel wordt waargenomen en eindig bij de spier die samentrekt.','Huidreceptor → sensibel neuron → ruggenmerg → motorisch neuron → skeletspier.']},
'4.10': {person:['Charles Darwin en Alfred Russel Wallace','Beiden beschreven natuurlijke selectie als mechanisme dat evolutionaire verandering helpt verklaren.'], more:[
['Selectie is geen doel','Een populatie verandert door verschillen in voortplantingssucces.','Een erfelijke variant die in een bepaalde omgeving gunstig is, kan in latere generaties vaker voorkomen. De verandering ontstaat niet omdat een individu haar nodig heeft.','De omgeving selecteert uit bestaande variatie.'],
['Genetische drift','Toeval kan ook de frequentie van varianten veranderen.','Vooral in kleine populaties kan een allel toevallig vaker of zeldzamer worden, ook zonder voordeel. Dat verschilt van natuurlijke selectie.','Niet elke verandering is een aanpassing.']],
exercise:['In een bacteriepopulatie zijn enkele bacteriën al resistent. Wat gebeurt er mogelijk na antibioticagebruik?','Gevoelige bacteriën sterven vaker; resistente bacteriën kunnen overleven en zich vermeerderen.','Het aandeel resistente bacteriën kan stijgen door selectie van reeds aanwezige variatie.']}
};
for (const subject of window.KIW) for (const chapter of subject.chapters) {
  const extra = window.KIW_EXTRA[chapter[0]];
  if (extra) { chapter[3].push(...extra.more); chapter.person = extra.person; chapter.exercise = extra.exercise; }
}

// Eén ontdekhalte per genummerd punt van het KIW-leerstofoverzicht 2026.
const syllabusRows = `
1.1.1|Reële getallen en lettervormen|Getallen en letters volgen dezelfde bewerkingsregels.|Werk haakjes uit en verzamel gelijksoortige termen. Een letter staat voor een waarde, maar is zelf geen vermenigvuldigingsteken.|2(a + 3) − a = a + 6.
1.1.2|Ongelijkheden en absolute waarde|Een ongelijkheid beschrijft een heel gebied van oplossingen.|Je mag aan beide kanten hetzelfde optellen. Vermenigvuldig je met een negatief getal, dan draait het ongelijkheidsteken om. Absolute waarde is afstand tot nul.|Uit −2x < 6 volgt x > −3; de absolute waarde van −3 is 3.
1.1.3|Machten en logaritmen|Een logaritme zoekt de exponent van een macht.|Gebruik aᵐ·aⁿ = aᵐ⁺ⁿ voor hetzelfde grondtal. Bij logₐ(b) = c geldt aᶜ = b, met a > 0 en a ≠ 1.|2³·2² = 2⁵; log₂(8) = 3.
1.1.4|Procenten en evenredigheid|Een percentage vergelijkt met een geheel van honderd delen.|Bij recht evenredige grootheden blijft de verhouding gelijk. Bij omgekeerd evenredige grootheden blijft het product gelijk.|20% van 50 is 10; verdubbel je bij gelijk werk de snelheid, dan halveert de tijd.
1.1.5|Eerste- en tweedegraadsvergelijkingen|Een vergelijking vraagt welke waarden beide kanten gelijk maken.|Een eerstegraadsvergelijking kun je isoleren. Een tweedegraadsvergelijking kun je soms ontbinden; anders helpt de discriminant D = b² − 4ac om reële oplossingen te bepalen.|x² − 5x + 6 = 0 geeft (x − 2)(x − 3) = 0, dus x = 2 of 3.
1.1.6|Veeltermen|Een veelterm bestaat uit termen met gehele niet-negatieve machten van de onbekende.|De hoogste macht met niet-nulcoëfficiënt bepaalt de graad. Veeltermen kun je optellen, vermenigvuldigen en euclidisch delen. Bij deling door x − a is de rest P(a); nulwaarden helpen ontbinden in factoren en vergelijkingen oplossen.|P(x) = x² − 4 heeft graad 2 en factoren (x − 2)(x + 2).
1.1.7|Stelsels van vergelijkingen|Een stelsel zoekt waarden die meerdere vergelijkingen tegelijk waar maken.|Substitutie vervangt een onbekende door een uitdrukking. Eliminatie combineert vergelijkingen zodat één onbekende verdwijnt. Controleer de oplossing in alle vergelijkingen.|x + y = 5 en x − y = 1: optellen geeft 2x = 6, dus x = 3 en y = 2.
1.1.8|Matrices|Een matrix ordent getallen in rijen en kolommen.|Optellen vergt gelijke afmetingen; scalaire vermenigvuldiging vermenigvuldigt elk element met hetzelfde getal. Voor matrixvermenigvuldiging moeten de binnenste afmetingen passen. Machten vergen een vierkante matrix; transponeren verwisselt rijen en kolommen.|Een 2×3-matrix maal een 3×2-matrix levert een 2×2-matrix.
1.2.1|Vlakke figuren|Cirkels, driehoeken en vierhoeken hebben herkenbare relaties tussen zijden en hoeken.|Gelijkvormige driehoeken hebben gelijke hoeken en evenredige zijden; congruente figuren zijn ook even groot. In een cirkel is een omtrekshoek op dezelfde boog half zo groot als de middelpuntshoek. Herken raaklijn, koorde, bijzondere lijnen in driehoeken, soorten vierhoeken en ingeschreven of omgeschreven cirkels van regelmatige veelhoeken.|Een middelpuntshoek van 80° hoort bij een omtrekshoek van 40° op dezelfde boog.
1.2.2|Afstand, omtrek en oppervlakte|Lengte meet een lijn, oppervlakte meet een gebied.|Voor punten (x₁,y₁) en (x₂,y₂) gebruik je de afstandsformule met Pythagoras. Kies daarna de oppervlakteformule die bij de figuur past.|Tussen (0,0) en (3,4) is de afstand √(3²+4²) = 5.
1.2.3|Rechte, cirkel en parabool|Een vergelijking beschrijft alle punten op een bepaalde figuur.|y = ax + b is een niet-verticale rechte. (x − a)² + (y − b)² = r² is een cirkel. y = a(x − h)² + k heeft een verticale symmetrieas x = h.|Bij y = (x − 2)² + 1 ligt de top op (2,1).
1.2.4|Onderlinge ligging en snijpunten|Snijpunten voldoen tegelijk aan de vergelijkingen van beide figuren.|Gelijke richtingscoëfficiënten geven voor niet-verticale rechten evenwijdige of samenvallende lijnen. Loodrechte rechten hebben, waar gedefinieerd, hellingen met product −1. Voor snijpunten van rechten, cirkels en parabolen los je hun vergelijkingen als stelsel op.|y = x en y = −x snijden in (0,0) en staan loodrecht.
1.2.5|Graden en radialen|Een volledige draai is 360° of 2π radialen.|Vermenigvuldig graden met π/180 om radialen te krijgen. Radialen passen rechtstreeks in formules voor booglengte en goniometrie.|90° = π/2 rad; 180° = π rad.
1.2.6|Sinus, cosinus en tangens|Een hoek bepaalt verhoudingen in een rechthoekige driehoek.|Op de eenheidscirkel ligt het punt bij hoek θ op (cos θ, sin θ). Voor cos θ ≠ 0 is tan θ = sin θ / cos θ. Tekens veranderen per kwadrant.|Bij 30° is sin 30° = 1/2.
1.2.7|Goniometrische formules|Formules verbinden goniometrische waarden van verwante hoeken.|De grondformule sin²θ + cos²θ = 1 geldt voor elke θ. Som-, verschil- en verdubbelingsformules helpen een ingewikkelde hoek ontleden.|sin(2θ) = 2 sin θ cos θ.
1.3.1|Functiesoorten en samenstelling|Verschillende formules geven verschillende soorten grafieken.|Herken onder meer veelterm-, rationale, wortel-, goniometrische, cyclometrische, exponentiële en logaritmische functies. Bij samenstelling f∘g vul je eerst g in en daarna f; let op domeinbeperkingen.|Als f(x)=x² en g(x)=x+1, dan f(g(x))=(x+1)².
1.3.2|Afgeleiden en grafiekgedrag|Een afgeleide vertelt hoe een grafiek lokaal verandert.|f′ geeft de helling, f″ helpt kromming en buigpunten onderzoeken. Combineer nulpunten, teken van f′, extrema, symmetrie, periode en asymptoten voor een volledig grafiekbeeld.|Voor f(x)=x² is f′(x)=2x: dalend links van 0, stijgend rechts.
1.3.3|Integraal en oppervlakte|Een bepaalde integraal telt bijdragen over een interval samen.|Boven de x-as geeft de integraal een oppervlakte. Onder de x-as telt de bijdrage negatief; voor de geometrische totale oppervlakte neem je daar de absolute waarde van.|De oppervlakte onder y=x van 0 tot 2 is ∫₀² x dx = 2.
1.3.4|Primitieve functies en integratietechnieken|Integreren draait een afgeleide terug.|Splits eenvoudige termen, gebruik substitutie voor een samengestelde uitdrukking en partiële integratie bij geschikte producten. Een bepaalde integraal evalueer je als F(b) − F(a).|Een primitieve van 2x is x² + C; ∫₀² 2x dx = 4.
1.4.1|Telproblemen|Vraag eerst of volgorde telt en of herhaling mag.|Een geordende code verschilt van een ongeordende selectie. Bouw het telprobleem stapsgewijs op, eventueel met het productprincipe, combinaties of variaties.|Twee cijfers uit 0–9 met herhaling en volgorde geven 10×10 = 100 codes.
1.4.2|Frequentie en kans|Relatieve frequentie is wat je waarneemt; kans is de modelwaarde.|Bij veel herhalingen kan de waargenomen relatieve frequentie vaak de kans benaderen. Een enkele korte reeks kan sterk afwijken.|6 keer kop in 10 worpen geeft frequentie 0,6; de modelkans bij een eerlijke munt is 0,5.
1.4.3|Voorwaardelijke kans|Een voorwaarde beperkt de groep die je bekijkt.|Lees in een kruistabel alleen de relevante rij of kolom, of volg een tak van de kansboom. Zonder terugleggen veranderen kansen na de eerste trekking.|Na één rode knikker uit 3 rood en 2 blauw blijven 2 rode op 4 over.
1.4.4|Centrum en spreiding|Eén gemiddelde vertelt niet hoe ver waarden uit elkaar liggen.|Mediaan en gemiddelde beschrijven centrum; bereik en standaardafwijking beschrijven spreiding. Kies een passende grafiek voor de soort gegevens.|De reeksen 4,5,6 en 0,5,10 hebben beide gemiddelde 5, maar andere spreiding.
1.4.5|Normale verdeling|Een normaal model is symmetrisch en klokvormig.|Het gemiddelde ligt in het midden; de standaardafwijking bepaalt hoe breed de curve is. Controleer of een klokvormig model bij de gegevens past.|Bij dezelfde gemiddelde waarde geeft grotere standaardafwijking een bredere curve.
1.4.6|Oppervlakte als relatieve frequentie|Een gebied onder een kansdichtheidscurve stelt een aandeel voor.|De totale oppervlakte is 1. Een interval onder een normale curve heeft een modelkans gelijk aan de oppervlakte tussen de grenswaarden.|Ongeveer 68% ligt tussen μ−σ en μ+σ bij een normale verdeling.
2.1.1|Druk en pascal|Druk is kracht per oppervlakte-eenheid.|Bereken p = F/A met kracht in newton en oppervlakte in m². Een pascal is één newton per vierkante meter.|10 N op 2 m² geeft 5 Pa.
2.1.2|Druk bij vaste stoffen|Eenzelfde kracht kan verschillend veel druk geven.|Een kleiner contactoppervlak verhoogt de druk. Zet oppervlaktes eerst om: 1 cm² is 0,0001 m².|Een scherpe naald drukt bij dezelfde kracht sterker dan een stompe punt.
2.1.3|Atmosferische druk|De lucht boven ons oefent druk uit.|Atmosferische druk komt door het gewicht van de luchtkolom. Ze verandert met hoogte en weersomstandigheden.|Op grotere hoogte is er minder lucht boven je en meestal lagere luchtdruk.
2.1.4|Druk in gassen|Gasdeeltjes botsen voortdurend tegen de wand.|Veel of energierijke botsingen verhogen de druk. In een afgesloten vat kunnen volume en temperatuur de druk veranderen.|Druk een afgesloten spuit samen: de gasdruk loopt op.
2.1.5|Hydrostatische en totale druk|Dieper in een vloeistof wordt de druk groter.|De extra hydrostatische druk is ρgh. Voor de totale druk tel je de druk op het vloeistofoppervlak erbij: p = p₀ + ρgh.|Op 2 m diepte is de extra waterdruk groter dan op 1 m.
2.1.6|Beginsel van Pascal|Een extra druk in een ingesloten vloeistof wordt doorgegeven.|Een hydraulische pers heeft een kleine en grote zuiger. De drukverandering is gelijk; de kracht is op de grotere oppervlakte groter.|Een autokrik kan met een beperkte invoerkracht een grote last tillen.
2.2.1|Temperatuur en kelvin|Gaswetten gebruiken de absolute temperatuur.|Reken om met T(K) = t(°C) + 273,15. Een temperatuurverschil van 1 K is even groot als een verschil van 1 °C.|27 °C komt overeen met 300,15 K.
2.2.2|Gaswetten|Druk, volume en temperatuur veranderen samen.|Bij constante temperatuur en hoeveelheid is pV constant. Bij constante druk is het volume van een ideaal gas evenredig met T in kelvin.|Halveer bij constante T het volume: de druk verdubbelt.
2.2.3|Ideale gaswet|Eén formule verbindt de toestandsgrootheden van een ideaal gas.|pV = nRT, met n in mol en T in kelvin. Gebruik samenhangende eenheden, bijvoorbeeld Pa en m³ bij R in SI-eenheden.|Als n en T gelijk blijven, geeft de helft van V de dubbele p.
2.2.4|Toestandsveranderingen|Een gas kan van toestand veranderen langs verschillende wegen.|Bij een isotherme verandering blijft T constant, bij een isobare p en bij een isochore V. Bepaal eerst wat gelijk blijft voordat je een gaswet kiest.|Een afgesloten starre fles benadert een isochore verandering.
2.2.5|Deeltjesmodel en temperatuur|Temperatuur hangt samen met beweging van deeltjes.|Bij opwarming stijgt gemiddeld hun kinetische energie. Tijdens een faseovergang gaat energie ook naar verandering in onderlinge ordening en aantrekking.|IJs kan smelten terwijl de temperatuur rond 0 °C blijft.
2.2.6|Warmte en warmtebalans|Warmte is energie die door temperatuurverschil wordt overgedragen.|Zonder faseovergang geldt Q = mcΔT. In een geïsoleerde menging is de afgestane warmte gelijk aan de opgenomen warmte, als verliezen worden verwaarloosd.|Een warm stuk metaal koelt af terwijl het water opwarmt.
2.2.7|Faseovergangen|Een stof kan vast, vloeibaar of gasvormig zijn.|Smelten en verdampen vragen energie; stollen en condenseren geven energie af. De fase kan veranderen zonder temperatuurverandering tijdens de overgang.|Water kookt bij gegeven druk rond een vaste kooktemperatuur.
2.2.8|Smeltwarmte|Smelten kost energie zonder dat de temperatuur tijdens de overgang hoeft te stijgen.|Voor een zuivere stof bij de smelttemperatuur gebruik je Q = mLₛ, met Lₛ de soortelijke smeltwarmte.|Dubbele massa ijs vraagt bij dezelfde omstandigheden dubbele smeltenergie.
2.2.9|Verdampingswarmte|Verdampen vraagt energie om moleculen van elkaar los te maken.|Bij de faseovergang gebruik je Q = mLᵥ. Die energie gaat niet rechtstreeks naar temperatuurstijging.|Een natte huid kan afkoelen doordat verdampend water energie opneemt.
2.2.10|Koken en condenseren|Koken ontstaat in de hele vloeistof zodra dampbellen kunnen blijven bestaan.|De kooktemperatuur hangt van de druk af. Bij condenseren gaat damp terug naar vloeistof en komt energie vrij.|Water kan op grote hoogte bij een lagere temperatuur koken.
2.3.1|Lading en coulomb|Elektrische lading kan positief of negatief zijn.|Gelijksoortige ladingen stoten af, tegengestelde trekken aan. De SI-eenheid van lading is coulomb (C).|Twee negatief geladen bolletjes stoten elkaar af.
2.3.2|Geleiders en isolatoren|Elektrische lading kan niet in elk materiaal even gemakkelijk bewegen.|In een geleider zijn sommige ladingdragers vrij mobiel. In een isolator blijven ladingen veel sterker gebonden.|Koper geleidt goed; kunststof is doorgaans een isolator.
2.3.3|Influentie en polarisatie|Een nabijgelegen lading kan lading binnen een voorwerp verschuiven.|In een geleider herschikken vrije ladingen zich door influentie. In een niet-geleider verschuiven positieve en negatieve ladingscentra een beetje: polarisatie.|Een geladen ballon kan een neutraal papiersnipper aantrekken.
2.3.4|Wet van Coulomb|De kracht tussen puntladingen neemt af met het kwadraat van de afstand.|F = k · (grootte van q₁) · (grootte van q₂) / r² geeft de krachtgrootte. De tekens bepalen of de kracht aantrekt of afstoot; bepaal daarna de richting afzonderlijk.|Bij dubbele afstand is de kracht viermaal kleiner.
2.3.5|Elektrische veldsterkte|Een elektrisch veld beschrijft kracht per positieve testlading.|E = F/q, gemeten in N/C. Een positieve testlading ondervindt kracht met het veld mee; een negatieve in tegengestelde richting.|Op +1 C werkt 2 N naar rechts: E is 2 N/C naar rechts.
2.3.6|Homogeen en radiaal veld|Veldlijnen tonen de richting van het elektrisch veld.|Bij een homogeen veld zijn de lijnen evenwijdig; rond een puntlading radiaal. Ze wijzen van positieve naar negatieve lading.|Tussen ideale evenwijdige platen is het veld ongeveer homogeen.
2.3.7|Veld van een dipool|Een dipool bestaat uit twee tegengestelde ladingen dicht bij elkaar.|Veldlijnen vertrekken van de positieve lading en eindigen op de negatieve. Het patroon is krom en symmetrisch langs de verbindingsas.|Teken eerst de + en −, dan de lijnen ertussen en eromheen.
2.3.8|Kracht in een elektrisch veld|Een lading voelt een kracht waar een elektrisch veld is.|F = qE als vectorrelatie. Voor negatieve q is de kracht tegengesteld aan E; in een radiaal veld hangt E ook af van de plaats.|Een elektron wijkt tegen de veldrichting in af.
2.3.9|Kracht tussen meerdere ladingen|Bij meerdere puntladingen werkt elke kracht afzonderlijk.|Teken op de onderzochte lading een pijl voor elke andere lading. Tel daarna de vectoren op; bij loodrechte pijlen kan Pythagoras helpen.|Twee gelijke tegengestelde horizontale krachten heffen elkaar op.
2.3.10|Resulterend elektrisch veld|Een elektrisch veld is een vector, dus richtingen tellen mee.|Bereken of schets het veld door elke puntlading op dezelfde plaats en tel de veldvectoren op. Gebruik voor de richting een positieve testlading.|Tussen twee gelijke positieve ladingen heffen de velden zich middenin op.
2.3.11|Potentiaal en potentiële energie|Elektrische potentiaal is potentiële energie per lading.|Eₚ = qV verbindt potentiële energie met potentiaal V voor een puntlading. Het teken van q beïnvloedt Eₚ.|Bij V = 3 V heeft een lading van +2 C een potentiële energie van 6 J ten opzichte van het gekozen nulpunt.
2.3.12|Energieverandering in homogeen veld|Elektrische energie kan in bewegingsenergie overgaan.|Zonder verliezen geldt ΔEₖ = −ΔU. In een homogeen veld hangt het potentiaalverschil langs de veldrichting samen met E en de verplaatsing.|Verliest een vrije lading 2 J potentiële energie, dan wint ze 2 J kinetische energie.
2.4.1|Stroomsterkte|Stroomsterkte is lading per tijd.|I = ΔQ/Δt; één ampère is één coulomb per seconde. Conventionele stroomrichting loopt van plus naar min buiten de batterij.|3 C in 1 s betekent 3 A gemiddelde stroom.
2.4.2|Spanning|Spanning is een verschil in elektrische potentiële energie per lading.|Een batterij houdt tussen haar polen een potentiaalverschil in stand. Meet spanning altijd tussen twee punten; de eenheid is volt.|Een lading van 1 C kan bij 5 V een energieverschil van 5 J ondervinden.
2.4.3|Weerstand en Ohm|Een ohmse weerstand koppelt spanning en stroom.|U = RI. De eenheid ohm is V/A. Let op: de wet van Ohm beschrijft ohmse componenten bij de gegeven omstandigheden.|Bij U = 12 V en R = 6 Ω is I = 2 A.
2.4.4|Eenvoudige schakeling|Een stroomkring moet gesloten zijn om blijvend stroom te laten lopen.|Teken batterij, verbindingsdraden en weerstanden als kring. Markeer knooppunten om verschillende takken te herkennen.|Met een open schakelaar brandt een lamp niet.
2.4.5|Ampère- en voltmeter|Een ampèremeter staat in de stroomweg, een voltmeter tussen twee punten.|Sluit een ideale ampèremeter in serie aan; een ideale voltmeter parallel over het onderdeel. Hun ideale weerstanden zijn respectievelijk nul en oneindig.|Meet de spanning over een weerstand met meetdraden aan beide uiteinden.
2.4.6|Serie- en parallelschakeling|De verbinding bepaalt de vervangingsweerstand.|Bij serie tel je weerstanden op. Bij parallel tel je de omgekeerde weerstanden op: 1/Rᵥ = 1/R₁ + 1/R₂ + … .|Twee weerstanden van 6 Ω parallel geven samen 3 Ω.
2.4.7|Joule-effect|Stroom door een weerstand kan elektrische energie in warmte omzetten.|Het omgezette vermogen is P = I²R. De warmteoverdracht in een bepaalde tijd hangt af van het vermogen en de tijdsduur.|Een elektrische kachel wordt warm als er stroom door de weerstand loopt.
2.4.8|Joule en kilowattuur|Energie is vermogen maal tijd.|E = Pt. Eén kWh is de energie van 1 kW gedurende 1 uur en is gelijk aan 3,6 miljoen joule.|Een toestel van 2 kW gedurende 0,5 uur gebruikt 1 kWh.
2.4.9|Stroom, spanning en vermogen|Werk bij een schakeling van totaal naar onderdelen.|Bereken eerst de vervangingsweerstand en totale stroom. Gebruik daarna gelijke stroom in serie, gelijke spanning in parallel en P = UI per weerstand.|12 V over 6 Ω geeft 2 A en 24 W in die weerstand.
2.5.1|Magneten en polen|Een permanente magneet heeft een noord- en zuidpool.|Gelijke polen stoten af en tegengestelde trekken aan. Splitsen maakt kleinere magneten met opnieuw twee polen.|Twee noordpolen tegenover elkaar stoten af.
2.5.2|Magnetisch veld|Een magnetisch veld heeft op elke plaats een richting en grootte.|Veldlijnen buiten een staafmagneet lopen van noord naar zuid. De veldvector raakt lokaal aan de veldlijn.|Een kompasnaald richt zich langs het plaatselijke veld.
2.5.3|Veldsterkte en tesla|De grootte van een magnetisch veld wordt met B aangeduid.|De SI-eenheid van B is tesla (T). Het veld kan een kracht uitoefenen op bewegende ladingen of stroomvoerende draden.|Een sterker B kan onder gelijke omstandigheden een grotere magnetische kracht geven.
2.5.4|Kracht op bewegende lading|Een bewegende lading in een magnetisch veld kan afbuigen.|De grootte is F = |q|vB sin θ. De kracht staat loodrecht op snelheid en veld; bij beweging parallel aan het veld is ze nul.|Een deeltje dwars op het veld ondervindt maximale magnetische kracht.
2.5.5|Kracht op stroomdraad|Een stroomvoerende geleider in een magneetveld kan een kracht ondervinden.|Voor een rechte draad is F = BIL sin θ voor het deel van lengte L in een uniform veld. Bepaal de richting met de toepasselijke handregel.|Een draad evenwijdig aan het veld ondervindt geen magnetische kracht.
2.5.6|Veld rond een rechte draad|Elektrische stroom wekt een magnetisch veld rond de draad op.|De veldlijnen zijn concentrische cirkels. Met de rechterhandregel volgt de richting uit de stroomrichting.|Duim met de conventionele stroom mee; vingers krullen met de veldlijnen.
2.5.7|Lus en solenoïde|Een stroomlus en een spoel versterken het veld in bepaalde gebieden.|Een solenoïde bestaat uit veel windingen. Binnen een lange spoel is het veld ongeveer homogeen, met buiten een patroon als van een staafmagneet.|Meer windingen geven samen een herkenbare noord- en zuidkant.
2.5.8|Veldsterkte van draad en spoel|Stroom en geometrie bepalen de grootte van het magnetisch veld.|Rond een lange rechte draad geldt B = μ₀I/(2πr); binnen een lange ideale solenoïde ongeveer B = μ₀nI in lucht/vacuüm.|Verder van dezelfde draad is B kleiner; meer stroom maakt B groter.
2.5.9|Inductie en Lenz|Een verandering van magnetische flux kan spanning opwekken.|De geïnduceerde stroom werkt de fluxverandering die haar veroorzaakt tegen. Dat is de kwalitatieve richtingregel van Lenz.|Beweeg een magneet naar een spoel toe: het geïnduceerde veld werkt de toenemende flux tegen.
2.6.1|Atoomkern en isotopen|Het atoomnummer Z telt protonen; het massagetal A ook neutronen.|Isotopen hebben hetzelfde Z maar een ander aantal neutronen. Bij een ion blijft Z gelijk maar verandert het aantal elektronen.|Koolstof-12 en koolstof-14 hebben beide 6 protonen.
2.6.2|Alfa-, bèta- en gammastraling|Deze stralingsvormen verschillen in aard en eigenschappen.|Alfa bestaat uit heliumkernen, bèta uit elektronen of positronen, gamma uit fotonen. Hun ioniserend vermogen en doordringing verschillen.|Een vel papier houdt alfastraling meestal tegen; gamma vraagt zwaardere afscherming.
2.6.3|Vervalprocessen|Bij kernverval veranderen atoomnummer en/of massagetal volgens vaste regels.|Bij alfa daalt A met 4 en Z met 2. Bij bèta-min stijgt Z met 1 terwijl A gelijk blijft; gamma verandert A en Z niet.|Na alfa-verval van ²³⁸₉₂U ontstaat ²³⁴₉₀Th.
2.6.4|Halveringstijd en activiteit|Radioactief verval volgt een exponentieel patroon.|N(t) = N₀e⁻λᵗ en T₁/₂ = ln 2/λ. Activiteit A = λN geeft het aantal vervallen per seconde gemiddeld, gemeten in becquerel.|Na twee halveringstijden blijft gemiddeld een kwart van de oorspronkelijke kernen over.
2.7.1|Positie en afgelegde weg|Beweging beschrijf je ten opzichte van een gekozen referentiestelsel.|Positie kan een teken en richting hebben. Afgelegde weg telt de volledige route en is altijd niet-negatief.|3 m heen en 3 m terug: 6 m weg maar nul netto verplaatsing.
2.7.2|Eenparig rechtlijnig|Bij constante snelheid is versnelling nul.|De plaats is x(t)=x₀+vt. De x(t)-grafiek is een rechte met helling v; de v(t)-grafiek is horizontaal.|Start op 2 m en loop 3 m/s: na 4 s ben je op 14 m.
2.7.3|Eenparig versneld|Constante versnelling verandert de snelheid gelijkmatig.|Gebruik v=v₀+at en Δx=v₀t+½at². Leg een positieve richting vast en gebruik tekens consequent.|Uit rust met a=2 m/s² is v na 3 s gelijk aan 6 m/s.
2.7.4|x(t), v(t) en a(t)|Drie grafieken tonen dezelfde beweging op een andere manier.|Bij constante a is a(t) horizontaal, v(t) een rechte en x(t) een parabool. Helling van x(t) is v; helling van v(t) is a.|Een stijgende v(t)-lijn heeft positieve versnelling.
2.7.5|Gemiddeld en ogenblikkelijk|Een gemiddelde over een interval is niet altijd de waarde op één tijdstip.|Gemiddelde snelheid is totale verplaatsing gedeeld door tijd. Ogenblikkelijke snelheid lees je als lokale helling van x(t).|Bij versnellen kan de eindwaarde hoger zijn dan het gemiddelde.
2.7.6|Vrije val|Zonder luchtweerstand versnelt een vrij vallend voorwerp naar beneden.|Nabij het aardoppervlak is g ongeveer 9,81 m/s². Massa verandert deze ideale valversnelling niet.|Uit rust is de snelheid na 1 s ongeveer 9,81 m/s naar beneden.
2.7.7|Verticale worp omhoog|Bij omhoog werpen blijft de versnelling naar beneden gericht.|Met omhoog positief geldt a=−g. Op het hoogste punt is de snelheid kortstondig nul, maar de versnelling blijft −g.|De bal vertraagt omhoog en versnelt weer omlaag.
2.7.8|Horizontale worp|Horizontale en verticale beweging kun je afzonderlijk beschrijven.|Zonder luchtweerstand blijft de horizontale snelheid constant, terwijl de verticale snelheid door zwaartekracht groeit.|Een knikker die horizontaal van tafel rolt, beschrijft een parabool.
2.8.1|Vectoren ontbinden|Eén schuine vector kun je op twee loodrechte assen projecteren.|Bij een hoek θ met de positieve x-as geldt vaak Fₓ=F cos θ en Fᵧ=F sin θ. Controleer de tekens aan de hand van de richting.|Een kracht schuin omhoog heeft een horizontale en een verticale component.
2.8.2|Vectoren samenstellen|Een resultante combineert grootte én richting.|Tel x-componenten apart op en y-componenten apart. Voor loodrechte componenten kun je de grootte met Pythagoras vinden.|3 N rechts en 4 N omhoog geven een resultante van 5 N schuin omhoog.
2.8.3|Drie wetten van Newton|Krachten verklaren veranderingen van beweging.|Zonder nettokracht blijft snelheid constant; ΣF=ma; krachten tussen twee voorwerpen komen in even grote tegengestelde paren.|Een netto kracht van 10 N op 2 kg geeft 5 m/s².
2.8.4|Meerdere krachten|Elke kracht draagt onafhankelijk bij aan de nettokracht.|Teken alle krachten op hetzelfde voorwerp. Tel hun vectoren op vóór je ΣF=ma gebruikt.|Een trek van 8 N rechts en 3 N links geeft netto 5 N rechts.
2.8.5|Arbeid|Arbeid beschrijft energieoverdracht door een kracht over een verplaatsing.|Een constante kracht evenwijdig aan de verplaatsing levert W=Fs. Arbeid meet je in joule.|5 N in bewegingsrichting over 2 m levert 10 J arbeid.
2.8.6|Arbeid onder een hoek|Alleen de krachtcomponent langs de verplaatsing levert arbeid.|Voor een constante kracht geldt W=Fs cos θ. Loodrechte kracht heeft bij die verplaatsing geen arbeid.|Bij θ=90° is cos θ=0 en dus W=0.
2.8.7|Vermogen|Vermogen is arbeid of energie per tijd.|P=W/Δt en de eenheid watt is J/s. Hetzelfde werk in minder tijd vergt groter gemiddeld vermogen.|100 J in 5 s komt overeen met 20 W.
2.8.8|Oppervlakte onder F(x)|Arbeid kan je als oppervlakte onder een kracht-positiecurve zien.|Voor de krachtcomponent in de bewegingsrichting is W=∫Fₓ dx. Gebieden onder de as tellen negatief mee.|Een constante kracht van 4 N over 3 m vormt een rechthoek van 12 J.
2.8.9|Veelvoorkomende krachten|Herken zwaartekracht, normaalkracht en veerkracht in een krachtenplan.|Dicht bij aarde geldt Fz=mg. Normaalkracht staat loodrecht op het contactvlak; voor een ideale veer is Fᵥ=−kx.|Een boek op een tafel heeft Fz omlaag en een normaalkracht omhoog.
2.8.10|Massa en gewicht|Massa beschrijft de traagheid van een voorwerp; gewicht is de kracht op de steun of ophanging.|Massa meet je in kg. Zwaartekracht Fz = mg werkt op het voorwerp, terwijl het gewicht de kracht is die het voorwerp op zijn steun uitoefent en in newton wordt gemeten. Alleen bij rust op een horizontale steun zonder andere verticale krachten hebben gewicht en zwaartekracht dezelfde grootte.|Een boek op een tafel oefent gewicht op de tafel uit. Tijdens vrije val zonder steun heeft het nog zwaartekracht, maar geen gewicht op een steun.
2.8.11|Arbeid door zwaartekracht|Zwaartekracht verricht arbeid als hoogte verandert.|Bij een daling met hoogte h verricht zwaartekracht +mgh; bij omhoog bewegen −mgh als je de beweging zo definieert.|Een vallend voorwerp wint bewegingsenergie terwijl zwaarte-energie daalt.
2.8.12|Arbeid door een veer|Een veerkracht verandert met de uitrekking.|De opgeslagen veerenergie is Eₑ=½kx². De arbeid van de veer tussen twee standen is de afname van deze potentiële energie.|Dubbele uitrekking geeft viermaal de opgeslagen energie.
2.8.13|Arbeid en kinetische energie|Nettowerk verandert bewegingsenergie.|Wₙₑₜ=ΔEₖ en Eₖ=½mv². Houd rekening met alle krachten die arbeid leveren.|Gaat de snelheid van v naar 2v, dan verviervoudigt Eₖ.
2.8.14|Gravitationele potentiële energie|Hoogte kan energie opslaan in een zwaarteveld.|Dicht bij de aarde geldt ΔEₚ=mgΔh. Kies een nulpunt voor hoogte; energieverschillen zijn meestal het belangrijkst.|Een boek 1 m hoger heeft m·g·1 m meer zwaarte-energie.
2.8.15|Elastische energie|Een vervormde ideale veer kan energie opslaan.|Eₑ=½kx² met k de veerconstante en x de uitrekking of indrukking vanuit de evenwichtsstand.|Bij x=0 is de elastische energie volgens dit model nul.
2.8.16|Energieomzettingen|Beweging, hoogte en veeruitrekking kunnen energie uitwisselen.|Schrijf aan begin en einde Eₖ, Eₚ en Eₑ op en houd rekening met eventuele verliezen door wrijving.|Een veer lanceert een voorwerp: veerenergie wordt bewegingsenergie.
2.8.17|Behoud van mechanische energie|Zonder dissipatieve arbeid blijft de som van mechanische energie constant.|Eₖ+Eₚ+Eₑ is dan aan begin en eind gelijk. Controleer eerst of wrijving of een motor energie toevoegt of wegneemt.|Bij ideale vrije val verandert mgh in ½mv².
2.8.18|Energiedissipatie|Mechanische energie kan overgaan in warmte of geluid.|Totale energie blijft behouden, maar minder blijft beschikbaar als mechanische energie. Wrijvingsarbeid verlaagt vaak Eₖ+Eₚ.|Een remmende fiets warmt de remmen op.
2.8.19|Statische en dynamische wrijving|Statische wrijving voorkomt glijden tot een grens.|De maximale statische wrijving is μₛN; bij glijden is de grootte van dynamische wrijving vaak μₖN in het eenvoudige model.|Een zware kast blijft eerst staan en begint pas bij voldoende duwkracht te schuiven.
2.8.20|Eenparige cirkelbeweging|Een constante baansnelheid betekent niet nul versnelling.|De snelheidsrichting verandert continu. De versnelling wijst naar het middelpunt.|Een auto in een bocht versnelt in de natuurkundige betekenis.
2.8.21|Periode en centripetaalversnelling|De omlooptijd en frequentie beschrijven hoe vaak een baan wordt afgelegd.|f=1/T, v=2πr/T en ω=2π/T. De centripetaalversnelling is a𝚌=v²/r=ω²r.|Bij dezelfde snelheid geeft een kleinere bochtstraal een grotere a𝚌.
2.8.22|Centripetaalkracht|Er is geen nieuwe soort kracht: het is de netto naar binnen gerichte kracht.|F𝚌=mv²/r. Afhankelijk van de situatie levert bijvoorbeeld spanning, zwaartekracht of wrijving die centripetale nettokracht.|Bij een auto in een vlakke bocht kan wrijving de naar binnen gerichte kracht leveren.
2.9.1|Amplitude, periode en frequentie|Een harmonische trilling herhaalt zich rond een evenwichtsstand.|Amplitude is maximale uitwijking, periode de duur van één cyclus, frequentie het aantal cycli per seconde.|Bij T=0,5 s is f=2 Hz.
2.9.2|Pulsatie en fase|Sinusfuncties kunnen een harmonische trilling beschrijven.|Bij x(t)=A cos(ωt+φ) is ω=2πf. Het faseverschil vertelt hoe ver twee trillingen in hun cyclus verschoven zijn.|Twee identieke golven die een halve periode verschoven zijn, zijn in tegenfase.
2.9.3|Snelheid en versnelling bij trilling|De snelheid verandert tijdens één harmonische cyclus.|Voor x=A cos(ωt) is v=−Aω sin(ωt) en a=−ω²x. Bij de uiterste stand is de snelheid nul en de versnelling maximaal in grootte.|Een slinger keert aan de rand even om.
2.9.4|Massa-veer en slinger|Twee systemen kunnen bij kleine uitwijkingen harmonisch bewegen.|Voor een ideale veer geldt T=2π√(m/k); voor een eenvoudige slinger bij kleine hoeken T≈2π√(L/g). De voorwaarden bij deze formules tellen mee.|Een zwaardere massa aan dezelfde veer trilt langzamer.
2.9.5|Energie in een trilling|Bij een ideale trilling wisselen bewegings- en potentiële energie.|In de uiterste stand is snelheid nul en potentiële energie maximaal. Bij de evenwichtsstand is snelheid meestal maximaal.|Een veer slaat bij uiterste uitrekking energie op.
2.9.6|Lopende golven|Een golfpatroon beweegt door een medium of veld.|Transversaal betekent dwars op de voortplanting, longitudinaal evenwijdig eraan. De deeltjes bewegen doorgaans rond hun plaats.|Een snaargolf is transversaal; geluid in lucht longitudinaal.
2.9.7|Golf als energietransport|Een golf kan energie dragen zonder het hele medium mee te voeren.|Plaatselijke delen trillen terwijl het patroon verder trekt. Hoeveel energie wordt overgedragen hangt van het soort golf en haar amplitude af.|Op een stadiontribune loopt een golf rond terwijl de toeschouwers blijven zitten.
2.9.8|Golfsnelheid en golflengte|Een periodieke golf legt in één periode één golflengte af.|Daarom v=fλ. Het golfgetal is k=2π/λ in radialen per meter.|Bij f=5 Hz en λ=2 m is v=10 m/s.
2.9.9|Bewegingsvergelijking van een golf|Een formule beschrijft de uitwijking in tijd én ruimte.|Een lopende sinusgolf naar rechts kan y(x,t)=A sin(kx−ωt+φ) zijn. Het teken tussen kx en ωt geeft de richting in dit model.|Als t toeneemt, schuift dezelfde fase naar grotere x.
2.9.10|Superpositie|Bij overlap tel je de uitwijkingen van golven op.|Gelijke uitwijkingen versterken elkaar; tegengestelde kunnen elkaar tijdelijk opheffen. Na de overlap lopen ideale golven verder.|Twee golftoppen samen geven een hogere top.
2.9.11|Staande golf|Overlappende tegengesteld lopende golven kunnen een vast patroon maken.|Knopen bewegen niet; buiken hebben maximale uitwijking. Alleen bepaalde frequenties passen bij de randvoorwaarden van een snaar of luchtkolom.|Een snaar vast aan beide uiteinden heeft knopen bij de uiteinden.
2.9.12|Weerkaatsing, breking en interferentie|Een golfmodel verklaart meerdere herkenbare verschijnselen.|Weerkaatsing keert terug, breking verandert richting door andere voortplantingssnelheid, interferentie combineert golven. Buiging is uitwaaieren rond een opening en resonantie sterke respons bij een passende frequentie.|Golven achter een smalle opening waaieren uit.
2.10.1|Geluid en intensiteit|Geluid in lucht is een voortplantende drukgolf.|Geluidsintensiteit is gemiddeld vermogen per oppervlakte, in W/m². Een bron die trilt kan de omringende lucht in beweging zetten.|Verder van een kleine bron verdeelt hetzelfde vermogen zich over een groter oppervlak.
2.10.2|Decibel en geluidsniveau|De decibelschaal vergelijkt intensiteiten logaritmisch.|L=10 log₁₀(I/I₀) dB bij een afgesproken referentie-intensiteit I₀. Een factor tien in intensiteit geeft 10 dB verschil.|Een factor honderd in intensiteit geeft 20 dB verschil.
`;
const chemistryRows = `
3.1.1|Zuivere stoffen en mengsels|Een mengsel bevat meerdere stoffen; een zuivere stof heeft één soort samenstelling.|Scheidingsmethoden gebruiken verschillen in eigenschappen, zoals kookpunt, deeltjesgrootte of oplosbaarheid. Scheiden verandert stoffen niet chemisch.|Filtratie scheidt zand van water; destillatie kan vloeistoffen op kookpunt scheiden.
3.1.2|Enkelvoudig en samengesteld|Een enkelvoudige stof bevat één element; een samengestelde stof meerdere.|Kijk naar de atoomsoorten in de formule, niet naar het aantal atomen. O₂ is enkelvoudig ondanks twee atomen.|O₂ is enkelvoudig; H₂O is samengesteld.
3.1.3|Symbolen en formules|Een symbool duidt een element aan; een formule vertelt welke atomen een stof bevat.|Kleine indices geven aantallen atomen in één molecuul of formule-eenheid. Een coëfficiënt vóór de formule geeft hoeveel deeltjes of mol reageren.|2 H₂O bevat samen 4 H-atomen en 2 O-atomen.
3.1.4|Anorganische naamgeving|Een naam geeft aanwijzingen over de samenstelling van een stof.|Herken ionladingen en veelvoorkomende anionen. Bij zouten schrijf je eerst het positieve ion en dan het negatieve; de totale lading is nul.|CaCl₂ heet calciumchloride en bevat Ca²⁺ met twee Cl⁻.
3.1.5|Anorganische stofklassen|Stofklassen groeperen verbindingen met vergelijkbare formules en eigenschappen.|Herken onder meer oxiden, hydroxiden, zuren en zouten. De stofklasse helpt reacties en naamgeving voorspellen, maar controleer altijd de formule.|NaOH is een hydroxide; HCl in water is een zuur; NaCl is een zout.
3.1.6|Polaire en apolaire oplosmiddelen|Oplossen hangt af van de interacties tussen stof en oplosmiddel.|Water is polair en hydrateert veel ionen; apolaire stoffen lossen vaak beter op in apolaire oplosmiddelen. Dit is een vuistregel, geen garantie.|Olie mengt slecht met water maar beter met een apolair oplosmiddel.
3.1.7|Elektrolyten|Een elektrolyt vormt bewegende ionen in oplossing of smelt.|Daardoor kan de vloeistof stroom geleiden. Een opgeloste moleculaire stof die geen ionen vormt, geleidt doorgaans niet goed.|NaCl-oplossing geleidt; suikeroplossing veel minder.
3.1.8|Oplosbaarheid van zouten|Niet elke ionverbinding lost even goed op in water.|Een oplosbaarheidstabel geeft aan welke ioncombinaties goed of slecht oplosbaar zijn. Combineer de ionen en controleer pas dan of een neerslag ontstaat.|Meng Ag⁺ en Cl⁻: slecht oplosbaar AgCl kan neerslaan.
3.1.9|Soorten reacties en energie|Bij een chemische reactie worden atomen anders verbonden.|Synthese bouwt op, analyse splitst; exotherme reacties geven energie af, endotherme nemen energie op. Massa en elk atoomsoort blijven behouden in een gesloten systeem.|2 H₂ + O₂ → 2 H₂O behoudt 4 H- en 2 O-atomen.
3.1.10|Ionisatie en dissociatie|Ionisatie maakt ionen uit een covalente stof; dissociatie scheidt ionen uit een ionrooster.|Het onderscheid gaat over wat er vóór het oplossen aanwezig was. Sommige moleculen reageren met water tot ionen; zouten bevatten al ionen in hun rooster.|NaCl dissocieert in Na⁺ en Cl⁻; HCl vormt in water H₃O⁺ en Cl⁻.
3.1.11|Reactietypes|Herken wat de reactie aandrijft of oplevert.|Een neerslag vormt een slecht oplosbare vaste stof; gasontwikkeling levert gas; neutralisatie laat zuur en base reageren; redox draagt elektronen over.|Ag⁺ + Cl⁻ → AgCl(s) is een neerslagreactie.
3.1.12|Stoffen- en ionenvergelijking|Een stoffenvergelijking toont volledige stoffen, een netto-ionenvergelijking alleen de reagerende deeltjes.|Splits goed oplosbare sterke elektrolyten in ionen en schrap toeschouwerionen aan beide kanten. Controleer atomen én lading.|Ag⁺(aq) + Cl⁻(aq) → AgCl(s) is een essentiële ionenvergelijking.
3.2.1|Protonen, neutronen en elektronen|Z identificeert het element, A telt de kerndeeltjes.|Voor een neutraal atoom is aantal protonen gelijk aan elektronen. Het aantal neutronen is A−Z.|Bij ²³₁₁Na zijn er 11 protonen en 12 neutronen.
3.2.2|Isotopen|Isotopen zijn atomen van hetzelfde element met verschillend aantal neutronen.|Schrijf een isotoop als ᴬZX of met elementnaam en massagetal. Z blijft gelijk, A verandert.|¹²₆C en ¹⁴₆C zijn isotopen van koolstof.
3.2.3|Relatieve en absolute atoommassa|De relatieve atoommassa is een gewogen gemiddelde van natuurlijke isotopen.|Vermenigvuldig per isotoop de relatieve massa ongeveer met de fractie van voorkomen en tel op. De absolute massa van één atoom druk je in kg uit.|Isotopen van ongeveer 10 u en 11 u met 20% en 80% voorkomen geven een gemiddelde massa van ongeveer 10,8 u en een relatieve atoommassa van ongeveer 10,8.
3.2.4|Bohr-Sommerfeld en spin|Elektronen worden met niveaus en quantumgetallen beschreven.|Een hoofdniveau bevat subniveaus, die orbitalen omvatten. Een orbitaal kan maximaal twee elektronen met tegengestelde spin bevatten in dit model.|Het 1s-orbitaal biedt plaats aan twee elektronen.
3.2.5|Orbitalen|Een orbitaal beschrijft waar een elektron waarschijnlijk te vinden is.|Een orbitaal is geen vast cirkelbaantje. s- en p-orbitalen verschillen van vorm en oriëntatie.|Een p-subniveau heeft drie orbitalen.
3.2.6|Elektronenconfiguratie|Elektronen vullen orbitalen volgens energieregels.|Vul eerst lagere energietoestanden. In gelijkwaardige orbitalen plaats je elektronen eerst afzonderlijk met dezelfde spin volgens de regel van Hund.|Zuurstof heeft configuratie 1s² 2s² 2p⁴.
3.2.7|Perioden en groepen|De plaats van een element laat patronen zien.|Elementen in dezelfde hoofdgroep hebben vergelijkbare valentie-elektronen. De periode hangt samen met het hoogste bezette hoofdniveau.|Na en K staan in dezelfde hoofdgroep en reageren beide vaak tot +1-ionen.
3.2.8|Mono-atomische ionen|Een atoom wordt een ion door elektronen op te nemen of af te staan.|De kern verandert niet. Een metaal staat vaak valentie-elektronen af; een niet-metaal kan elektronen opnemen.|Mg verliest twee elektronen en vormt Mg²⁺.
3.3.1|Ion- en covalente binding|Bindingen kunnen elektronen overdragen of delen.|In een ionrooster houden tegengestelde ladingen elkaar vast. Bij een covalente binding delen atomen één of meer elektronenparen.|NaCl bestaat uit ionen; in H₂ delen twee H-atomen een elektronenpaar.
3.3.2|Krachten tussen deeltjes|Niet alle aantrekkingskrachten werken op hetzelfde niveau.|Een covalente binding zit binnen een molecuul. London-, dipool- en waterstofbruginteracties werken tussen moleculen; ion-dipoolkrachten tussen een ion en polair molecuul.|Water omringt Na⁺ in oplossing via ion-dipoolinteracties.
3.3.3|Kook- en smeltpunt|Sterkere aantrekkingskrachten vragen doorgaans meer energie om deeltjes te scheiden.|Vergelijk alleen stoffen met oog voor massa, structuur en soort interactie. Bij koken van een moleculaire stof worden vooral intermoleculaire krachten overwonnen.|Waterstofbruggen helpen het relatief hoge kookpunt van water verklaren.
3.3.4|Lewisformules|Een Lewisstructuur laat valentie-elektronen en bindingen zien.|Tel eerst alle valentie-elektronen, maak een skelet, vul buitenste schillen en controleer formele lading waar nodig. Bij polyatomische ionen tel je lading mee.|Voor H₂O teken je O met twee O–H-bindingen en twee vrije elektronenparen.
3.3.5|Sigma- en pi-bindingen|Een enkele covalente binding is een σ-binding.|Een dubbele binding bestaat uit één σ- en één π-binding; een drievoudige uit één σ- en twee π-bindingen.|De C=C-binding in etheen heeft één σ en één π.
3.3.6|Bindingshoek en molecuulvorm|Elektronenparen rond een centraal atoom stoten elkaar af.|De geometrie bepaalt de bindingshoeken. Vrije elektronenparen nemen ook ruimte in en veranderen de vorm ten opzichte van een ideaal model.|CH₄ is tetraëdrisch; H₂O is gebogen.
3.3.7|Elektronegativiteit en binding|Een verschil in elektronegativiteit maakt een binding meer polair.|Het sterker aantrekkende atoom draagt een gedeeltelijk negatieve lading. Een polaire binding maakt niet automatisch het hele molecuul polair.|De O–H-binding is polair omdat O sterker aan het gedeelde paar trekt.
3.3.8|Polariteit van moleculen|De molecuulvorm bepaalt of bindingsdipolen elkaar opheffen.|Teken de dipolen als pijlen en combineer hun richtingen. Symmetrie kan een netto dipool nul maken.|CO₂ is lineair en apolair ondanks twee polaire C=O-bindingen.
3.4.1|Mol en molaire massa|Mol verbindt aantallen deeltjes met een meetbare hoeveelheid stof.|n=N/Nₐ en n=m/M. Eén mol bevat ongeveer 6,022×10²³ deeltjes; M is de massa per mol.|18 g water is ongeveer 1 mol als M(H₂O)=18 g/mol.
3.4.2|Molair gasvolume en gaswet|Gasvolume hangt af van hoeveelheid, temperatuur en druk.|Het molaire volume Vₘ=V/n geldt bij opgegeven omstandigheden; noem die altijd. De algemene ideale gaswet is pV=nRT.|Eén mol ideaal gas neemt bij hogere T en gelijke p een groter volume in.
3.4.3|Concentraties en dichtheid|Een oplossing kun je op meerdere manieren beschrijven.|Massaprocent vergelijkt massa’s, volumeprocent volumes, massa/volumeprocent massa per oplossingsvolume (bijvoorbeeld g per 100 mL), massaconcentratie g/L en molaire concentratie mol/L. Dichtheid ρ=m/V helpt massa en volume omzetten.|10 g stof in 1 L oplossing is 10 g/L, maar voor mol/L heb je de molaire massa nodig.
3.4.4|Verdunnen|Bij zuiver verdunnen blijft de hoeveelheid opgeloste stof gelijk.|Gebruik n₁=n₂ en dus c₁V₁=c₂V₂ als je dezelfde stof volgt. Het nieuwe volume is het eindvolume, niet enkel toegevoegd water.|100 mL van 1 mol/L tot 200 mL verdunnen geeft 0,5 mol/L.
3.4.5|Stoichiometrie en rendement|De reactievergelijking levert de molverhouding.|Bereken eerst hoeveel mol van elk reagens aanwezig is en bepaal het limiterende reagens. Het werkelijke rendement kan lager zijn dan de theoretische opbrengst.|Bij 2 H₂ + O₂ → 2 H₂O vraagt 2 mol H₂ precies 1 mol O₂.
3.5.1|Factoren van reactiesnelheid|Temperatuur, concentratie, oppervlak en katalysator kunnen de snelheid beïnvloeden.|De aard van de stoffen telt mee. Een groter contactoppervlak geeft bij vaste stof vaak meer plaatsen waar botsingen kunnen gebeuren.|Fijn poeder kan sneller reageren dan een groot blok van hetzelfde materiaal.
3.5.2|Botsingsmodel|Een reactie vraagt geschikte botsingen tussen deeltjes.|De botsingen moeten voldoende energie en vaak een geschikte oriëntatie hebben. Meer botsingen zijn niet allemaal automatisch effectieve botsingen.|Bij hogere temperatuur overschrijden meer botsingen de energiedrempel.
3.5.3|Energie en katalysator|Activeringsenergie is de drempel tussen begin en de overgangstoestand.|Een katalysator biedt een ander pad met lagere activeringsenergie. De reactie-energie ΔU tussen begin en einde blijft bij dezelfde reactie gelijk.|Op een energiegrafiek wordt de top lager, maar het eindniveau niet anders.
3.5.4|Gemiddelde en ogenblikkelijke snelheid|De reactiesnelheid beschrijft concentratieverandering per tijd.|De gemiddelde snelheid lees je als helling tussen twee meetpunten. De ogenblikkelijke snelheid is de helling van de raaklijn op één tijdstip.|Een steeds vlakker wordende concentratiecurve betekent een afnemende snelheid.
3.5.5|Snelheidswet en orde|Een snelheidswet legt een gemeten verband tussen snelheid en concentraties.|Bij v=k[A]ᵐ[B]ⁿ zijn m en n reactieordes die je experimenteel bepaalt; ze hoeven niet de coëfficiënten van de totaalreactie te zijn.|Als verdubbelen van [A] de snelheid verviervoudigt bij gelijke overige omstandigheden, is de orde in A hier 2.
3.6.1|Aflopend of evenwicht|Een aflopende reactie verloopt vrijwel volledig in één richting.|Bij een evenwichtsreactie blijft zowel heen- als terugreactie optreden. In dynamisch evenwicht zijn hun snelheden gelijk.|De concentraties blijven constant, maar moleculen blijven reageren.
3.6.2|Kc en evenwichtsconcentraties|Kc vergelijkt product- en reagensconcentraties in evenwicht.|De coëfficiënten worden exponenten. Gebruik waarden op het evenwicht, niet zomaar beginconcentraties.|Voor H₂+I₂⇌2HI is Kc=[HI]²/([H₂][I₂]).
3.6.3|Le Chatelier|Een evenwicht reageert op een verstoring.|Meer reagens kan tijdelijk de heenreactie bevoordelen. Bij constante temperatuur blijft Kc voor die reactie dezelfde; temperatuurverandering kan Kc veranderen.|Extra H₂ bij H₂+I₂⇌2HI kan het evenwicht naar HI verschuiven.
3.6.4|Evenwichtsvraagstukken|Maak een overzicht van begin, verandering en evenwicht.|Druk de onbekende concentraties uit met één veranderingsvariabele en vul ze in de Kc-uitdrukking in. Controleer of de oplossing fysisch mogelijk is.|Bij A⇌B met begin [A]=1 en omzetting x: evenwicht [A]=1−x en [B]=x.
3.7.1|Brønsted-Lowry-koppels|Een zuur geeft een proton af; een base neemt een proton op.|Na protonafgifte blijft de geconjugeerde base over. De twee leden van een koppel verschillen precies één H⁺.|NH₄⁺/NH₃ is een geconjugeerd zuur-basekoppel.
3.7.2|Water en Kw|Water kan een proton afstaan en opnemen.|Bij zelfionisatie ontstaan H₃O⁺ en OH⁻. Bij 25 °C is Kw=[H₃O⁺][OH⁻]≈10⁻¹⁴ onder de gebruikelijke concentratiebenadering.|In zuiver water bij 25 °C zijn beide concentraties ongeveer 10⁻⁷ mol/L.
3.7.3|Zuur-basereacties in water|Volg bij een reactie het proton.|Identificeer het zuur dat H⁺ afgeeft en de base die het ontvangt. Schrijf daarna de geconjugeerde partners op.|HCl + H₂O → H₃O⁺ + Cl⁻: HCl is het zuur en water de base.
3.7.4|Ka, Kb, pKa en pKb|Evenwichtsconstanten beschrijven de sterkte van zwakke zuren en basen.|Grotere Ka betekent sterker zuur bij dezelfde omstandigheden; pKa=−log Ka, dus een kleinere pKa betekent een sterker zuur.|Een zuur met pKa 3 is sterker dan één met pKa 5.
3.7.5|pH, pOH en ionconcentraties|pH en pOH zijn logaritmische maten voor H₃O⁺ en OH⁻.|Bij 25 °C geldt pH+pOH=14 onder de gebruikelijke concentratiebenadering. Een verschil van 1 pH-eenheid betekent factor 10 in [H₃O⁺].|pH 3 heeft tienmaal zoveel H₃O⁺ als pH 4.
3.7.6|pH berekenen|Sterke en zwakke zuren vragen een ander rekenmodel.|Een sterk monoprotisch zuur en een sterke base reageren in verdunde waterige oplossing nagenoeg volledig. Voor zwakke zuren of basen gebruik je Ka of Kb en een evenwichtsberekening. Controleer steeds aannames, stoichiometrie en de watertemperatuur.|Bij 0,001 mol/L HCl is pH ongeveer 3 in het eenvoudige model.
3.7.7|Zouten en pH|Een zoutoplossing hoeft niet neutraal te zijn.|Sommige ionen reageren met water en veranderen zo [H₃O⁺] of [OH⁻]. Bekijk van welke sterke of zwakke zuren en basen de ionen afkomstig zijn.|Acetaat uit een zwak zuur kan water licht basisch maken.
3.7.8|Buffers|Een buffer remt pH-veranderingen bij kleine toevoegingen zuur of base.|Een typische buffer bevat een zwak zuur en zijn geconjugeerde base in bruikbare hoeveelheden. De ene component vangt toegevoegd zuur, de andere toegevoegde base op.|Azijnzuur en acetaat vormen samen een bufferpaar.
3.7.9|Sterk zuur met sterke base titreren|Bij titratie voeg je een oplossing met bekende concentratie geleidelijk toe.|Het equivalentiepunt is bereikt als de reagerende hoeveelheden in de juiste molverhouding gelijk zijn. Een pH-curve vertoont daar een steile overgang.|Voor HCl + NaOH → NaCl + H₂O geldt op equivalentie n(HCl)=n(NaOH).
3.8.1|Oxidatie en reductie|Oxidatie staat elektronen af, reductie neemt ze op.|De reductor wordt zelf geoxideerd; de oxidator zelf gereduceerd. Beide halfreacties treden samen op.|Zn → Zn²⁺ + 2e⁻ is oxidatie.
3.8.2|Oxidatiegetallen|Oxidatiegetallen zijn boekhoudgetallen voor elektronenverdeling.|In een neutraal molecuul is de som nul; in een ion gelijk aan de ionlading. Elementen in enkelvoudige vorm hebben oxidatiegetal 0.|In H₂O is H meestal +1 en O −2.
3.8.3|Verandering van oxidatiegetal|Een stijging betekent oxidatie, een daling reductie.|Noteer voor en na de reactie per relevant element het oxidatiegetal. Zo vind je welke stof elektronen afstaat en welke opneemt.|Zn 0→+2 oxideert; Cu +2→0 reduceert.
3.8.4|Redoxkoppels|Een redoxkoppel bevat een geoxideerde en gereduceerde vorm.|Schrijf oxidator/reductor als koppel, met een halfreactie die elektronen uitwisselt.|Cu²⁺/Cu: Cu²⁺ + 2e⁻ ⇌ Cu.
3.8.5|Redoxvergelijkingen kloppend maken|Balanceer de halfreacties apart en tel ze dan op.|Maak eerst atomen en daarna lading kloppend met H₂O, H⁺ en elektronen in zuur midden. In basisch midden neutraliseer je H⁺ met OH⁻. Schrap gelijke deeltjes.|De opgetelde halfreacties mogen geen vrije elektronen overhouden.
3.8.6|Standaardreductiepotentiaal|Een potentiaal vergelijkt neiging tot reductie onder standaardvoorwaarden.|Een hogere E° wijst op een relatief grotere neiging tot reductie. Combineer kathode en anode om de standaardcelspanning te vinden.|E°cel = E°kathode − E°anode, beide als reductiepotentialen genoteerd.
3.8.7|Galvanisch element|Een spontane redoxreactie kan elektrische energie leveren.|Oxidatie vindt aan de anode plaats en reductie aan de kathode. Elektronen lopen buiten de cel van anode naar kathode; een zoutbrug ondersteunt ladingsbalans.|Een Zn/Cu-cel laat Zn oxideren en Cu²⁺ reduceren.
3.8.8|Elektrolysecel|Een externe spanningsbron kan een niet-spontane redoxreactie aandrijven.|Ook hier is de anode de plaats van oxidatie en de kathode van reductie, maar de bron dwingt de stroomrichting af.|Bij elektrolyse wordt elektrische energie in een chemische omzetting gestoken.
3.9.1|Bruto- en structuurformules|De brutoformule telt atomen; de structuurformule toont hun verbindingen.|Een verkorte formule schrijft groepen als CH₃ samen. In een zaagtandnotatie stellen hoeken en uiteinden C-atomen voor; H aan C zijn meestal weggelaten.|C₂H₆O past bij meer dan één structuur, zoals ethanol en dimethylether.
3.9.2|Keten en functionele groep|Een koolstofskelet kan lineair, vertakt of cyclisch zijn.|Een verzadigde koolstofketen heeft alleen enkelvoudige C–C-bindingen; onverzadigd bevat C=C of C≡C. De functionele groep stuurt veel reacties.|CH₃CH₂OH heeft een hydroxylgroep en is een alcohol.
3.9.3|Naamgeving en stofklassen|Een IUPAC-naam vertelt over keten, plaats en functionele groep.|Herken alkanen, alkenen, alkynen, halogeenalkanen, alcoholen, aminen, aldehyden, ketonen, carbonzuren, zouten en esters. Zoek eerst de hoofdketen en belangrijkste groep. Hun functionele groepen beïnvloeden polariteit, oplosbaarheid en typische reacties.|Propan-1-ol heeft drie C-atomen en OH aan koolstof 1.
3.9.4|Isomerie|Dezelfde brutoformule kan verschillende structuren of ruimtelijke vormen geven.|Keten-, plaats- en functie-isomerie veranderen verbindingen. Cis-transisomerie en optische isomerie gaan over ruimtelijke ordening.|Butaan en 2-methylpropaan hebben beide C₄H₁₀ maar andere ketens.
3.9.5|Organische reactietypes|Herken de verandering zonder een volledig mechanisme te hoeven geven.|Substitutie vervangt, additie voegt toe aan een meervoudige binding, eliminatie verwijdert, condensatie koppelt met afsplitsing en hydrolyse splitst met water. Polymerisatie maakt een keten.|Etheen + H₂ → ethaan is een additie.
`;
const biologyRows = `
4.1.1|Prokaryoot of eukaryoot|Alle cellen hebben een membraan, cytoplasma, DNA en ribosomen.|Een prokaryoot heeft geen membraanomhulde celkern. Een eukaryoot heeft een kern en verschillende membraangebonden organellen. Let op de gedeelde basis én de verschillende organisatie.|Een bacterie heeft wel DNA en ribosomen, maar geen celkern.
4.2.1|Dier- en plantcel onder lichtmicroscoop|Sommige celonderdelen zijn met lichtmicroscopie herkenbaar.|Een plantencel heeft doorgaans een celwand en grote vacuole; bij groene delen zijn chloroplasten zichtbaar. Kleinere organellen vragen elektronenmicroscopie.|De hoekige begrenzing van een plantencel komt vaak door de celwand.
4.2.2|Organellen en membraan|Elke celstructuur vervult een andere taak in een samenwerkend systeem.|De kern bewaart DNA; ribosomen maken eiwitten; ER en Golgi verwerken en transporteren; mitochondriën ondersteunen ATP-productie; lysosomen breken af. Het membraan begrenst de cel, microfilamenten en microtubuli vormen het cytoskelet. Bij planten hebben plastiden, celwand en vacuole extra taken; centriolen spelen bij veel dierlijke cellen een rol bij deling.|Een eiwit voor secretie gaat vaak via ruw ER en Golgi naar buiten.
4.2.3|Membraantransport|Stoffen passeren een membraan via verschillende routes.|Diffusie en osmose volgen een gradiënt; pompen kunnen tegen een gradiënt werken met energie. Grote deeltjes gaan via endocytose naar binnen of exocytose naar buiten.|In een hypertone omgeving verliest een dierlijke cel netto water door osmose.
4.3.1|Water, ionen en biomoleculen|Cellen bestaan uit water, mineralen en organische bouwstoffen.|Na⁺, K⁺, Ca²⁺ en andere ionen ondersteunen onder meer signalen en processen. Sachariden, lipiden, eiwitten en nucleïnezuren hebben verschillende bouw en functies.|Fosfolipiden vormen een membraan; DNA bewaart informatie.
4.3.2|Anabolisme en katabolisme|Cellen bouwen stoffen op en breken andere af.|Anabolisme kost meestal energie; katabolisme kan energie vrijmaken. De energieomzetting koppelt beide processen aan elkaar via onder andere ATP.|Eiwitopbouw uit aminozuren is anabool; afbraak van voedingsstoffen is katabool.
4.3.3|Lysosomen en vertering|Lysosomen bevatten enzymen die materiaal afbreken.|Bij autofagie wordt eigen beschadigd celmateriaal afgebroken en gerecycleerd. Bij fagocytose kan een cel grotere deeltjes opnemen die daarna verwerkt worden.|Een macrofaag neemt een bacterie op en breekt die in een compartiment af.
4.3.4|Enzymen|Enzymen versnellen specifieke reacties zonder netto verbruikt te worden.|Hun actieve plaats past bij bepaalde substraten. Temperatuur, pH en concentraties kunnen de activiteit beïnvloeden; te veel warmte kan de structuur verstoren.|Amylase helpt zetmeel afbreken.
4.3.5|Celademhaling en ATP|Cellen halen bruikbare energie uit voedingsstoffen.|Aerobe ademhaling gebruikt zuurstof en levert doorgaans meer ATP per glucose dan anaerobe routes. ATP is een directe energiedrager voor celprocessen.|Een spiercel kan bij intensief werk tijdelijk meer anaerobe ATP-productie gebruiken.
4.4.1|Celcyclus|Een cel groeit, kopieert DNA en deelt zich volgens een geordend verloop.|De interfase omvat onder meer DNA-replicatie; daarna volgt deling. Controlepunten helpen voorkomen dat beschadigd DNA zomaar wordt doorgegeven.|Voor mitose wordt het DNA eerst verdubbeld.
4.4.2|Chromatine en chromosomen|DNA is met eiwitten verpakt tot chromatine.|Tijdens deling condenseert dit materiaal tot zichtbare chromosomen. Na replicatie heeft een chromosoom twee zusterchromatiden totdat ze scheiden.|Een X-vormig chromosoom bevat twee verbonden zusterchromatiden.
4.4.3|DNA-replicatie|Voor celdeling wordt het DNA gekopieerd.|De dubbele helix opent en elk oud strengdeel dient als sjabloon voor een nieuwe complementaire streng. Zo krijgen dochtercellen erfelijke informatie.|T paart met A; C paart met G in DNA.
4.4.4|Mitose|Mitose verdeelt gekopieerde chromosomen over twee kernen.|Zusterchromatiden scheiden zodat de nieuwe kernen doorgaans hetzelfde chromosomenaantal behouden. Daarna splitst het cytoplasma.|Uit een menselijke lichaamscel kunnen twee cellen met elk 46 chromosomen ontstaan.
4.4.5|Meiose en recombinatie|Meiose halveert het chromosomenaantal en schept variatie.|In meiose I scheiden homologe chromosomen; crossing-over kan DNA tussen homologen uitwisselen. Non-disjunctie is een fout in de scheiding en kan afwijkende aantallen geven.|Normaal ontstaan haploïde geslachtscellen met 23 chromosomen bij de mens.
4.4.6|Gametogenese|Geslachtscellen ontstaan via deling en rijping.|Bij spermatogenese ontstaan doorgaans vier functionele zaadcellen per primaire spermatocyt; bij oögenese doorgaans één grote eicel en poollichaampjes. Timing en verdere rijping verschillen.|Eicel en zaadcel dragen elk een haploïde set bij.
4.5.1|Genotype en fenotype|Genen liggen op chromosomen; allelen zijn varianten van een gen.|Diploïde cellen hebben twee homologe sets, haploïde één. Het genotype beschrijft allelen, het fenotype de waarneembare kenmerken mede beïnvloed door de omgeving.|Aa is een genotype; een zichtbaar kenmerk is onderdeel van het fenotype.
4.5.2|Patronen van overerving|Niet alle kenmerken volgen een eenvoudig dominant-recessief schema.|Oefen mono- en dihybride kruisingen en herken codominantie, partiële dominantie, letale en multiple allelen, epistasie, koppeling en geslachtsgebonden overerving. Bepaal eerst welk model geldt voordat je kansen berekent.|Bij ABO-bloedgroepen zijn A en B codominant en komt ook allel O voor.
4.5.3|Stamboomanalyse|Een stamboom toont hoe een kenmerk door generaties verschijnt.|Onderzoek of het kenmerk generaties overslaat, bij beide geslachten voorkomt en van ouder op kind gaat. Sluit onmogelijke overervingswijzen uit; bewijs niet te snel één model.|Twee niet-aangedane ouders met een aangedaan kind kan op recessieve overerving wijzen.
4.6.1|DNA als codesysteem|De volgorde van basen draagt genetische informatie.|Een gen bevat instructies die tot een RNA- en vaak eiwitproduct kunnen leiden. De code wordt in triplets gelezen bij translatie.|Een andere basenvolgorde kan een ander eiwitresultaat geven.
4.6.2|Transcriptie, splicing en translatie|Informatie loopt van DNA via RNA naar eiwitsynthese.|Bij transcriptie ontstaat RNA; splicing verwijdert introns uit pre-mRNA. Een ribosoom vertaalt codons naar aminozuren; ook na translatie kan het eiwit worden aangepast.|AUG kan de translatie starten; UAA, UAG en UGA zijn stopcodons.
4.6.3|Genregulatie|Niet elk gen staat in elke cel voortdurend aan.|Transcriptiefactoren en andere moleculen kunnen transcriptie bevorderen of remmen. Zo kunnen cellen met hetzelfde DNA andere eiwitten maken.|Een spiercel en zenuwcel gebruiken verschillende delen van hun genoom.
4.6.4|Mutatietypes|Een mutatie is een verandering van de DNA-sequentie of chromosoomstructuur.|Een base kan vervangen, toegevoegd of verwijderd worden. Grotere veranderingen kunnen chromosoomdelen of aantallen beïnvloeden.|Een deletie van één base kan het leesraam verschuiven.
4.6.5|Modificaties en epigenetica|Genactiviteit kan veranderen zonder verandering van de DNA-lettervolgorde.|Chemische markeringen op DNA of histonen beïnvloeden hoe toegankelijk genen zijn. Invloeden van de omgeving kunnen op genexpressie werken.|DNA-methylering kan de aflezing van een gen beïnvloeden.
4.6.6|Gevolgen van mutaties|Een mutatie heeft niet altijd zichtbaar effect.|Een codon kan ondanks verandering hetzelfde aminozuur opleveren, of een ander aminozuur of stopteken. Het effect hangt af van de plaats en context.|Een vroege stopmutatie kan een verkort eiwit veroorzaken.
4.6.7|Karyogram|Een karyogram ordent chromosomen in paren.|Je bekijkt onder meer aantal, grootte en vorm. Sommige afwijkingen van aantal of grote structuur zijn zichtbaar; kleine puntmutaties doorgaans niet.|Trisomie 21 toont drie exemplaren van chromosoom 21.
4.6.8|Toepassingen van genetica|DNA-technieken kunnen vermeerderen, vergelijken en analyseren.|Klassieke veredeling kiest erfelijke kenmerken; PCR kopieert gericht DNA, gelelektroforese scheidt fragmenten en restrictie-enzymen knippen bepaalde sequenties. DNA-fingerprinting, Y-chromosoom en mitochondriaal DNA leveren onder verschillende omstandigheden informatie voor verwantschap.|Na PCR is een klein DNA-fragment veel vaker aanwezig voor onderzoek.
4.7.1|Voortplantingsorganen|Organen produceren geslachtscellen en ondersteunen bevruchting en ontwikkeling.|Testes maken zaadcellen en hormonen; ovaria dragen eicellen en maken hormonen. Eileiders, baarmoeder en andere organen hebben elk een rol in de route.|Bevruchting gebeurt doorgaans in een eileider.
4.7.2|Hormonale regeling|Hormonen verbinden hersenen en geslachtsorganen.|FSH en LH sturen follikels en gonaden aan; oestrogenen, progesteron en testosteron hebben verdere rollen. De LH-piek hangt samen met de eisprong.|Na de eisprong helpt progesteron het baarmoederslijmvlies onderhouden.
4.7.3|Oögenese en spermatogenese|De vorming van eicellen en zaadcellen verloopt niet identiek.|Beide gebruiken meiose, maar oögenese verdeelt cytoplasma ongelijk en spermatogenese vormt doorgaans meerdere functionele cellen. De timing verschilt sterk.|Uit een primaire spermatocyt ontstaan doorgaans vier spermatiden vóór verdere rijping.
4.7.4|Bevruchting|Twee haploïde geslachtscellen leveren samen een diploïde zygote.|De zaadcel en eicel versmelten en mechanismen helpen bevruchting door meerdere zaadcellen vermijden. Daarna beginnen celdelingen.|23 chromosomen van eicel en 23 van zaadcel geven normaal 46.
4.7.5|Zwangerschap, geboorte en anticonceptie|Na innesteling volgen embryonale ontwikkeling en later foetale groei.|Na de zygote volgen delingen, innesteling en ontwikkeling van embryo tot foetus. hCG en later placentaire hormonen ondersteunen de zwangerschap; placenta, navelstreng en vruchtwaterzak verzorgen uitwisseling en bescherming. Anticonceptiemethoden verschillen in werking en betrouwbaarheid.|Een condoom vormt een barrière; hormonale methoden kunnen ovulatie beïnvloeden.
4.8.1|Leukocyten|Witte bloedcellen vervullen verschillende afweertaken.|Macrofagen nemen indringers op; lymfocyten dragen bij aan gerichte afweer. Beide maken deel uit van een groter netwerk van immuuncellen.|Een macrofaag fagocyteert een bacterie.
4.8.2|Antigenen en antilichamen|Een antigeen kan door de afweer herkend worden.|Antilichamen zijn eiwitten die specifiek aan passende antigenen binden. Die herkenning kan helpen een indringer onschadelijk te maken of op te ruimen.|Een antilichaam tegen antigeen A past niet zomaar op antigeen B.
4.8.3|ABO en rhesus|Bloedgroepen beschrijven antigenen op rode bloedcellen.|ABO combineert A- en B-antigenen; rhesus verwijst hier vooral naar het D-antigeen. Antistoffen en compatibiliteit tellen bij transfusies.|Groep A heeft A-antigeen; rhesuspositief draagt D-antigeen.
4.8.4|Actieve en passieve immunisatie|Je afweer kan zelf leren of kant-en-klare antistoffen ontvangen.|Bij actieve immunisatie ontstaat eigen afweerrespons en vaak geheugen. Bij passieve immunisatie ontvang je antistoffen; dit werkt snel maar is meestal tijdelijk.|Een vaccin is actief; toediening van specifieke immunoglobulinen is passief.
4.9.1|Bloedsuikerhormonen|Insuline, glucagon en adrenaline beïnvloeden de beschikbaarheid van glucose.|Insuline bevordert opname en opslag; glucagon stimuleert beschikbaar maken. Adrenaline ondersteunt een snelle energierespons bij stress.|Na een maaltijd stijgt insuline vaak, bij vasten helpt glucagon glucose vrijmaken.
4.9.2|Reflexboog|Een reflex volgt een route van receptor naar effector.|Receptor, sensibele zenuwcel, centraal zenuwstelsel, motorische zenuwcel en spier of klier vormen een keten. Signalen passeren synapsen.|Hete pan aanraken → hand terugtrekken via een reflexboog.
4.9.3|Spieren en beweging|Skeletspier, hartspier en gladde spier verschillen in bouw en plaats.|Dwarsgestreepte skeletspier gebruikt ATP bij contractie en trekt via pezen aan botten. Hartspier pompt, gladde spier beweegt onder meer de darmwand.|Bij buiging van de elleboog trekt de biceps samen en beweegt de onderarm.
4.10.1|Bewijs voor evolutie|Verschillende onafhankelijke observaties ondersteunen gemeenschappelijke afstamming.|Fossielen tonen veranderingen door de tijd; overeenkomstige anatomie en DNA-sequenties laten verwantschap zien. Geen enkel bewijsstuk staat helemaal op zichzelf.|Vergelijking van homologe voorpoten bij zoogdieren toont een gedeeld bouwplan.
4.10.2|Lamarck, Darwin en moderne synthese|Historische theorieën geven andere verklaringen voor verandering.|Lamarck dacht onder meer aan overerving van tijdens het leven verworven eigenschappen. Darwin legde nadruk op erfelijke variatie en natuurlijke selectie; de moderne synthese verbindt selectie met genetica.|Een giraffe krijgt geen langere erfelijke nek omdat één individu zich vaak uitstrekt.
4.10.3|Selectie en genetische drift|Allelverhoudingen kunnen door selectie of toeval veranderen.|Natuurlijke selectie bevoordeelt varianten die in een omgeving meer nakomelingen opleveren; kunstmatige selectie gebeurt door menselijke keuze. Drift is toevalsverandering, vooral merkbaar in kleine populaties.|Resistente bacteriën kunnen vaker worden onder antibioticadruk; bij drift kan een allel ook zonder voordeel verdwijnen.
4.10.4|Populaties en soorten|Evolutie beschrijft veranderingen in populaties door generaties.|Een populatie is een groep individuen van één soort in een gebied. Een biologische soort wordt vaak omschreven als groepen die onder natuurlijke omstandigheden vruchtbare nakomelingen kunnen krijgen, met beperkingen bij bijvoorbeeld aseksuele organismen.|Eén dier evolueert niet plots; de frequentie van varianten in zijn populatie verandert.
4.10.5|Soortvorming en isolatie|Afscheiding kan genenuitwisseling tussen populaties verminderen.|Geografische, ecologische of gedragsmatige isolatie laat varianten in aparte populaties onafhankelijk veranderen. Als voortplantingsbarrières ontstaan, kunnen nieuwe soorten ontstaan.|Een rivier splitst een populatie; na veel generaties kunnen de groepen sterk uiteenlopen.
`;
window.KIW_SYLLABUS = [syllabusRows,chemistryRows,biologyRows].flatMap(block=>block.trim().split('\n').map(line=>{
 const [code,title,lead,detail,example]=line.split('|'); return {code,title,lead,detail,example};
}));
for (const subject of window.KIW) for (const chapter of subject.chapters) {
 chapter.stations = window.KIW_SYLLABUS.filter(row=>row.code.startsWith(chapter[0]+'.'));
}

// Kleine conceptdiagrammen bij elk hoofdstuk; labels horen bij de leerstof.
window.KIW_DIAGRAM = function(code) {
const ink='#22304a', blue='#5357d8', aqua='#24acc2', orange='#ee7d39', green='#2aaa77';
const line=(x1,y1,x2,y2,color=blue,w=3)=>`<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${w}" stroke-linecap="round"/>`;
const dot=(x,y,r=7,color=blue)=>`<circle cx="${x}" cy="${y}" r="${r}" fill="${color}"/>`;
const label=(x,y,str,color=ink,size=15)=>`<text x="${x}" y="${y}" fill="${color}" font-size="${size}" font-weight="700" font-family="system-ui,sans-serif">${str}</text>`;
const box=(x,y,w,h,color='#fff')=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="15" fill="${color}" stroke="${ink}" stroke-width="2"/>`;
let art='';
switch(code){
case '1.1': art=`${box(45,46,110,72,'#dce1ff')}${label(78,91,'2x + 4')}${label(181,92,'=')}${box(217,46,110,72,'#dce1ff')}${label(256,91,'12')}${line(70,149,302,149,orange,5)}${label(132,176,'x = 4',blue,20)}`;break;
case '1.2': art=`<polygon points="42,151 170,151 170,45" fill="#dce1ff" stroke="${blue}" stroke-width="3"/>${label(102,170,'a')}${label(180,101,'b')}${label(93,80,'c')}${line(170,138,156,138,orange,2)}${line(156,138,156,151,orange,2)}<circle cx="285" cy="105" r="57" fill="none" stroke="${aqua}" stroke-width="3"/>${dot(285,105,5,orange)}${line(285,105,342,105,orange,2)}${label(297,95,'r')}`;break;
case '1.3': art=`${line(36,154,345,154,ink,2)}${line(65,176,65,25,ink,2)}<path d="M 68 130 Q 165 180 190 78 Q 218 25 312 50" fill="none" stroke="${blue}" stroke-width="4"/>${line(120,133,260,65,orange,3)}${dot(184,101,6,orange)}${label(243,94,"f′(x)",orange)}`;break;
case '1.4': art=`${dot(62,100,10,ink)}${line(72,100,163,52)}${line(72,100,163,148)}${dot(164,52,9,orange)}${dot(164,148,9,aqua)}${label(177,57,'rood 3/5')}${label(177,153,'blauw 2/5')}${line(250,50,318,24,orange)}${line(250,50,318,80,orange)}${label(314,20,'2/4',orange,13)}`;break;
case '2.1': art=`${box(83,113,207,45,'#dbf8f3')}${line(190,28,190,101,orange,5)}<polygon points="183,99 197,99 190,110" fill="${orange}"/>${label(207,60,'F')}${line(85,170,290,170,aqua,2)}${label(151,190,'p = F/A',blue,19)}`;break;
case '2.2': art=`${box(37,51,129,112,'#dff6ff')}${box(226,51,99,112,'#dff6ff')}${[0,1,2,3,4].map(i=>dot(60+(i*17)%77,75+(i*31)%65,5,aqua)).join('')}${[0,1,2,3,4].map(i=>dot(238+(i*14)%69,75+(i*31)%65,5,orange)).join('')}${label(70,41,'V₁')}${label(248,41,'V₂')}${label(145,184,'pV = nRT',blue,18)}`;break;
case '2.3': art=`${dot(80,103,25,orange)}${dot(288,103,25,blue)}${label(72,111,'+', '#fff',20)}${label(282,111,'−','#fff',20)}${[73,103,133].map(y=>`${line(116,y,251,y,aqua,2)}<polygon points="251,${y-5} 261,${y} 251,${y+5}" fill="${aqua}"/>`).join('')}`;break;
case '2.4': art=`<path d="M 83 70 H 183 M 263 70 H 288 V 148 H 83 V 119 M 83 90 V 70" fill="none" stroke="${blue}" stroke-width="4"/>${line(64,93,102,93,orange,3)}${line(73,115,93,115,orange,3)}<path d="M 183 70 l 12 -15 14 30 15 -30 14 30 15 -30 10 15" fill="none" stroke="${orange}" stroke-width="3"/>${label(204,113,'R')}${label(150,181,'U = RI',blue,18)}`;break;
case '2.5': art=`${[0,1,2,3,4].map(i=>`<ellipse cx="${116+i*30}" cy="104" rx="17" ry="54" fill="none" stroke="${blue}" stroke-width="3"/>`).join('')}${line(255,104,316,104,orange,3)}<polygon points="315,98 327,104 315,110" fill="${orange}"/>${label(179,37,'spoel')}${label(272,91,'B',orange,19)}`;break;
case '2.6': art=`${dot(87,107,38,orange)}${label(70,113,'A, Z','#fff')}${line(135,107,231,107,aqua,3)}<polygon points="231,101 242,107 231,113" fill="${aqua}"/>${dot(296,107,32,blue)}${label(275,106,'A−4','#fff',12)}${label(278,121,'Z−2','#fff',12)}${label(149,86,'α-verval',blue)}`;break;
case '2.7': art=`${line(47,151,329,151,ink,2)}${line(59,167,59,42,ink,2)}<path d="M 63 144 Q 162 140 289 54" fill="none" stroke="${blue}" stroke-width="4"/>${line(160,110,264,48,orange,2)}${label(300,51,'x')}${label(327,172,'t')}${label(174,183,'helling = v',orange,15)}`;break;
case '2.8': art=`${box(144,75,94,78,'#dfe7ff')}${line(190,76,190,31,orange,4)}<polygon points="184,36 190,25 196,36" fill="${orange}"/>${line(190,153,190,190,blue,4)}<polygon points="184,180 190,193 196,180" fill="${blue}"/>${line(237,114,314,114,green,4)}<polygon points="307,108 321,114 307,120" fill="${green}"/>${label(195,48,'N',orange)}${label(195,183,'mg',blue)}${label(269,102,'F',green)}`;break;
case '2.9': art=`${line(37,106,335,106,ink,2)}<path d="M 37 106 C 75 25 111 25 149 106 S 223 187 261 106 S 298 25 335 106" fill="none" stroke="${aqua}" stroke-width="4"/>${line(75,49,75,106,orange,2)}${label(80,78,'A',orange)}${label(150,173,'λ',blue,21)}`;break;
case '2.10': art=`${[0,1,2,3,4,5,6,7,8,9,10,11].map(i=>line(55+i*24,45,55+i*24,143,i%4<2?blue:aqua,i%4<2?4:2)).join('')}${label(103,177,'verdichting   verdunning',blue,15)}`;break;
case '3.1': art=`${box(46,54,119,100,'#fff2df')}${box(213,54,119,100,'#e0f7ef')}${[0,1,2,3,4].map(i=>dot(65+i*18,91+(i%2)*26,6,i%2?orange:aqua)).join('')}${[0,1,2].map(i=>dot(237+i*25,102,6,orange)).join('')}${label(65,177,'mengsel')}${label(242,177,'stof')}${line(171,104,201,104,blue,3)}`;break;
case '3.2': art=`${dot(184,104,19,orange)}<circle cx="184" cy="104" r="53" fill="none" stroke="${blue}" stroke-width="2"/><circle cx="184" cy="104" r="82" fill="none" stroke="${aqua}" stroke-width="2"/>${dot(237,104,7,blue)}${dot(102,104,7,aqua)}${label(197,111,'Z','#fff',13)}${label(250,95,'e⁻')}`;break;
case '3.3': art=`${dot(185,111,24,orange)}${dot(97,64,18,aqua)}${dot(274,64,18,aqua)}${line(163,100,114,75,blue,3)}${line(206,100,256,75,blue,3)}${label(180,117,'O','#fff',17)}${label(92,70,'H','#fff')}${label(269,70,'H','#fff')}${label(155,168,'gebogen → polair',blue,16)}`;break;
case '3.4': art=`${box(25,68,86,75,'#fff2df')}${box(143,68,86,75,'#e3ebff')}${box(261,68,86,75,'#def9f3')}${label(48,113,'m')}${label(167,113,'n')}${label(282,113,'c')}${line(114,105,139,105,orange,3)}${line(232,105,257,105,aqua,3)}${label(52,175,'massa → mol → concentratie',blue,15)}`;break;
case '3.5': art=`${line(43,150,339,150,ink,2)}${line(55,161,55,33,ink,2)}<path d="M 60 137 Q 153 10 213 89 Q 269 133 333 107" fill="none" stroke="${orange}" stroke-width="4"/><path d="M 60 137 Q 146 70 211 102 Q 273 132 333 107" fill="none" stroke="${green}" stroke-width="4"/>${label(221,52,'Eₐ',orange)}${label(225,185,'reactiepad',blue,15)}`;break;
case '3.6': art=`${box(33,73,112,75,'#e3ebff')}${box(228,73,112,75,'#dff7ef')}${label(70,119,'A + B')}${label(266,119,'C + D')}${line(150,91,222,91,orange,3)}${line(222,130,150,130,aqua,3)}${label(145,184,'dynamisch evenwicht',blue,15)}`;break;
case '3.7': art=`${[0,1,2,3,4,5,6].map(i=>`<rect x="${34+i*44}" y="86" width="42" height="54" rx="5" fill="${['#e56a72','#eb8d56','#eeb34e','#dde36a','#9ed795','#5cccb9','#53aad6'][i]}"/>`).join('')}${label(38,70,'zuur')}${label(291,70,'base')}${label(171,119,'7',ink,18)}${label(38,171,'pH: logaritmische schaal',blue,15)}`;break;
case '3.8': art=`${box(31,75,109,77,'#dfe9ff')}${box(231,75,109,77,'#dcf7ed')}${label(70,123,'Zn')}${label(265,123,'Cu²⁺')}${line(146,110,222,110,orange,3)}${dot(175,110,5,orange)}${dot(197,110,5,orange)}${label(166,90,'e⁻',orange)}`;break;
case '3.9': art=`${[54,107,160,213,266,319].map((x,i)=>`${dot(x,i%2?121:83,7,i===2?orange:blue)}${i?line(x-53,(i-1)%2?121:83,x,i%2?121:83,blue,3):''}`).join('')}${label(125,169,'koolstofskelet',blue,16)}${label(154,74,'OH',orange,14)}`;break;
case '4.1': art=`${box(33,59,133,94,'#e0f8ed')}${box(212,59,133,94,'#e4ebff')}${dot(100,103,15,green)}${dot(280,103,29,blue)}${label(50,181,'prokaryoot')}${label(234,181,'eukaryoot')}${label(264,108,'kern','#fff',12)}`;break;
case '4.2': art=`<ellipse cx="187" cy="104" rx="139" ry="78" fill="#e5f9ef" stroke="${green}" stroke-width="3"/>${dot(181,103,33,blue)}${dot(97,82,14,orange)}${dot(260,125,15,aqua)}${label(168,109,'DNA','#fff',12)}${line(222,103,260,115,ink,2)}${label(267,111,'organel',ink,13)}`;break;
case '4.3': art=`${box(35,76,102,70,'#e6f8ef')}${box(237,76,102,70,'#fff2df')}${label(56,118,'glucose')}${label(266,118,'ATP')}${line(146,111,227,111,green,4)}<polygon points="220,105 234,111 220,117" fill="${green}"/>${label(150,90,'energie',green,13)}`;break;
case '4.4': art=`${label(59,46,'DNA')}${line(81,51,81,88,blue,3)}${label(46,120,'X',orange,34)}${label(146,120,'X',orange,34)}${line(201,105,250,105,blue,3)}${label(261,120,'I  I',green,29)}${label(108,172,'kopiëren → verdelen',blue,16)}`;break;
case '4.5': art=`${[0,1,2].map(i=>line(95+i*68,49,95+i*68,165,blue,2)).join('')}${[0,1,2].map(i=>line(95,49+i*58,231,49+i*58,blue,2)).join('')}${label(127,84,'Aa')}${label(196,84,'aa')}${label(127,143,'Aa')}${label(196,143,'aa')}${label(246,114,'50/50',orange,20)}`;break;
case '4.6': art=`${box(23,69,85,76,'#e2ebff')}${box(143,69,85,76,'#def7f6')}${box(262,69,85,76,'#fff0df')}${label(39,114,'DNA')}${label(159,114,'RNA')}${label(271,114,'eiwit')}${line(111,107,137,107,blue,3)}${line(231,107,257,107,orange,3)}`;break;
case '4.7': art=`${dot(74,106,33,aqua)}${dot(186,106,30,orange)}${line(113,106,145,106,blue,3)}${line(226,106,256,106,blue,3)}${dot(296,106,42,green)}${label(53,178,'23')}${label(178,178,'23')}${label(283,178,'46')}`;break;
case '4.8': art=`${dot(263,105,31,orange)}${[0,1,2].map(i=>`${line(78+i*47,89,78+i*47,125,blue,4)}${line(78+i*47,89,63+i*47,75,blue,4)}${line(78+i*47,89,93+i*47,75,blue,4)}`).join('')}${label(248,113,'Ag','#fff',16)}${label(46,164,'antilichamen → antigeen',blue,15)}`;break;
case '4.9': art=`${[45,130,218,315].map((x,i)=>`${dot(x,108,21,[orange,aqua,blue,green][i])}${i?line(x-63,108,x-27,108,ink,3):''}`).join('')}${label(26,158,'prikkel')}${label(108,158,'zenuw')}${label(193,158,'ruggenmerg')}${label(298,158,'spier')}`;break;
case '4.10': art=`${line(62,161,145,161,green,4)}${line(145,161,208,94,green,4)}${line(145,161,208,127,green,4)}${line(208,94,293,47,green,4)}${line(208,94,293,82,green,4)}${line(208,127,293,145,green,4)}${dot(296,47,6,orange)}${dot(296,82,6,aqua)}${dot(296,145,6,blue)}${label(45,190,'gedeelde voorouder → vertakkingen',green,14)}`;break;
}
return `<svg class="concept-drawing" viewBox="0 0 380 210" role="img" aria-label="Conceptschema bij hoofdstuk ${code}" xmlns="http://www.w3.org/2000/svg">${art}</svg>`;
};

/* Extra verdieping en kleine, inhoudelijke schema's voor alle biologiehaltes. */
(() => {
  const lessons = {
    '4.1.1': {
      more: 'Zoek eerst naar een echte celkern: het DNA van een prokaryoot ligt in een kerngebied zonder kernmembraan. Bacteriën kunnen wel een celwand hebben, maar die is anders opgebouwd dan de celwand van planten. Een eukaryoot kan één cel zijn (zoals een gist) of deel uitmaken van een meercellig organisme.',
      worked: 'Je ziet onder een microscoop een cel met ribosomen en DNA, maar zonder kernmembraan. De aanwezigheid van ribosomen alleen bewijst dus geen eukaryote cel; de ontbrekende kern wijst op een prokaryoot.',
      sketch: ['compare', 'Bacterie', 'DNA zonder kern', 'Dier of plant', 'DNA in kern'],
      caption: 'Het beslissende verschil is de membraanomhulde kern.'
    },
    '4.2.1': {
      more: 'Bij een lichtmicroscoop herken je vaak de vorm van de cel, celwand, cytoplasma en soms de kern, vacuole en chloroplasten. De celmembraan ligt bij een plant direct tegen de celwand en is daarom moeilijk afzonderlijk te zien. Wat zichtbaar is, hangt af van preparaat, kleuring en vergroting.',
      worked: 'Een uienschil toont meestal hoekige cellen met een duidelijke celwand maar doorgaans geen groene chloroplasten. Een bladcel bevat vaak wel chloroplasten: niet iedere plantencel doet aan fotosynthese.',
      sketch: ['compare', 'Uienschil', 'wand + vacuole', 'Bladcel', 'wand + bladgroenkorrel'],
      caption: 'Twee plantencellen kunnen onder de lichtmicroscoop anders lijken.'
    },
    '4.2.2': {
      more: 'Volg een uitgescheiden eiwit: in de kern ligt de code, ribosomen op ruw ER bouwen het eiwit, het ER vervoert het, het Golgi-apparaat sorteert het en een blaasje versmelt met de celmembraan. Glad ER maakt onder meer lipiden; mitochondriën maken via celademhaling veel ATP. Chloroplasten zijn plastiden, de vacuole ondersteunt onder andere stevigheid, de celwand biedt bescherming, het cytoskelet geeft vorm en helpt bij transport. Lysosomen breken materiaal af; centriolen helpen bij veel dierlijke cellen de spoelfiguur organiseren.',
      worked: 'Een kliercel scheidt een eiwit af. Kies de route: DNA → ribosoom op ruw ER → Golgi → blaasje → buiten de cel. De ribosomen maken het eiwit; het Golgi is geen plaats waar de DNA-code wordt opgeslagen.',
      sketch: ['flow', 'Kern', 'Ruw ER', 'Golgi', 'Secretie'],
      caption: 'De route van een eiwit dat de cel verlaat.'
    },
    '4.2.3': {
      more: 'Kleine moleculen kunnen passief bewegen van hoge naar lage concentratie. Bij gefaciliteerde diffusie gebruiken ze een kanaal of transporteiwit, zonder ATP-verbruik door die transportstap. Osmose is netto watertransport door een selectief doorlaatbaar membraan; actief transport tegen de gradiënt vraagt energie. Endocytose en exocytose verplaatsen grotere hoeveelheden via blaasjes.',
      worked: 'Buiten een cel is de opgeloste-stofconcentratie hoger. Water gaat netto naar buiten: de dierlijke cel krimpt. Een ion dat van lage naar hoge concentratie moet, kan die route niet met gewone diffusie afleggen.',
      sketch: ['compare', 'Met gradiënt', 'passief: geen ATP', 'Tegen gradiënt', 'pomp: energie nodig'],
      caption: 'De richting ten opzichte van de gradiënt bepaalt het transporttype.'
    },
    '4.3.1': {
      more: 'Water is een oplosmiddel en helpt bij transport en temperatuurregeling. Natrium- en kaliumionen zijn van belang voor membraanpotentialen; calcium speelt een rol bij signalering; fosfaationen maken deel uit van ATP en nucleïnezuren; ijzer zit onder meer in hemoglobine. Sachariden leveren energie of structuur, lipiden slaan energie op en vormen membranen, proteïnen hebben uiteenlopende functies en nucleïnezuren dragen informatie.',
      worked: 'Een celmembraan bevat een dubbele laag fosfolipiden met hydrofiele koppen naar het water en hydrofobe staarten naar binnen. Daardoor vormt het een grens tussen cel en omgeving.',
      sketch: ['compare', 'Water + ionen', 'milieu en signalen', 'Biomoleculen', 'bouw, energie, code'],
      caption: 'Verschillende stoffen dragen op andere manieren bij aan de cel.'
    },
    '4.3.2': {
      more: 'Bij katabolisme worden grote moleculen vaak in kleinere delen afgebroken; de vrijgekomen energie kan tijdelijk in ATP terechtkomen. Bij anabolisme worden uit bouwstenen nieuwe stoffen gemaakt, meestal met energietoevoer. ATP koppelt energievrijkomende aan energievragende processen, maar is geen langdurige energievoorraad.',
      worked: 'Een cel breekt een voedingsstof af en gebruikt de gewonnen energie om aminozuren tot een eiwit te verbinden. De eerste stap is katabool, de tweede anabool; ATP helpt de energie ertussen door te geven.',
      sketch: ['flow', 'Voedingsstof', 'ATP beschikbaar', 'Eiwitopbouw'],
      caption: 'Afbraak en opbouw zijn via energiedragers gekoppeld.'
    },
    '4.3.3': {
      more: 'Een lysosoom is een blaasje met afbraakenzymen. Bij fagocytose sluit de cel een groot deeltje in; het blaasje kan met een lysosoom versmelten. Bij autofagie omsluit de cel versleten eigen onderdelen en hergebruikt de afbraakproducten. Het membraan houdt enzymen grotendeels gescheiden van de rest van de cel.',
      worked: 'Een afweercel neemt een bacterie op: fagocytose → blaasje → versmelting met lysosoom → afbraak. Een beschadigd mitochondrion uit dezelfde cel opruimen heet autofagie.',
      sketch: ['flow', 'Opname', 'Lysosoom', 'Afbraak', 'Hergebruik'],
      caption: 'Materiaal wordt ingesloten, afgebroken en deels gerecycleerd.'
    },
    '4.3.4': {
      more: 'Het substraat bindt aan de actieve plaats van het enzym. De reactie heeft daardoor een lagere activeringsenergie en verloopt sneller; daarna komt het product los en kan het enzym opnieuw werken. Elk enzym heeft een bruikbaar pH- en temperatuurbereik. Bij een te hoge temperatuur kan de ruimtelijke vorm veranderen (denaturatie).',
      worked: 'Amylase werkt op zetmeel. Verwarmen tot een geschikte temperatuur kan de reactiesnelheid verhogen; sterk verhitten kan amylase denatureren, waarna hetzelfde zetmeel veel trager wordt afgebroken.',
      sketch: ['flow', 'Substraat', 'Enzym-bindplaats', 'Product'],
      caption: 'Het enzym komt na de reactie weer vrij.'
    },
    '4.3.5': {
      more: 'Bij aerobe celademhaling wordt glucose met zuurstof afgebroken tot koolstofdioxide en water; veel ATP ontstaat in de mitochondriën. Glycolyse start in het cytoplasma en levert al een kleine hoeveelheid ATP. Zonder voldoende zuurstof kan een menselijke cel via melkzuurgisting tijdelijk ATP blijven maken, maar per glucose veel minder.',
      worked: 'Vergelijk een spiercel tijdens rustig fietsen en een korte zware sprint. Bij voldoende zuurstof overheerst aerobe ATP-productie; bij grote belasting levert anaerobe omzetting tijdelijk extra ATP.',
      sketch: ['compare', 'Met zuurstof', 'meer ATP / glucose', 'Zonder genoeg O₂', 'minder ATP / glucose'],
      caption: 'De ATP-opbrengst verschilt sterk per route.'
    },
    '4.4.1': {
      more: 'In G1 groeit de cel, in S wordt het DNA gerepliceerd en in G2 bereidt de cel de deling verder voor. De M-fase omvat kerndeling en doorgaans cytokinese. Controlepunten bewaken onder meer DNA-schade en de juiste bevestiging van chromosomen. Sommige cellen verblijven in een rusttoestand (G0).',
      worked: 'Een cel is in de S-fase. Het DNA wordt verdubbeld, maar er zijn nog geen twee dochtercellen. Pas na M-fase en cytokinese zijn de celinhouden gescheiden.',
      sketch: ['flow', 'G1: groei', 'S: DNA-kopie', 'G2: controle', 'M: deling'],
      caption: 'De volgorde van de belangrijkste celcyclusfasen.'
    },
    '4.4.2': {
      more: 'DNA is rond histonen gewikkeld en vormt met andere eiwitten chromatine. Tijdens deling wordt dat sterk opgerold, zodat chromosomen beter verdeeld kunnen worden. Na de S-fase bestaat één gedupliceerd chromosoom uit twee identieke zusterchromatiden die bij het centromeer samenhangen; het chromosomenaantal tel je via de centromeren.',
      worked: 'Een menselijke cel in G2 heeft nog steeds 46 chromosomen, maar elk chromosoom bestaat uit twee chromatiden: 92 chromatiden in totaal. Na scheiding krijgt elke dochterkern normaal 46 chromosomen.',
      sketch: ['flow', 'Chromatine', 'DNA-kopie', 'Twee chromatiden', 'Scheiding'],
      caption: 'DNA-verdubbeling verdubbelt de chromatiden, niet direct het aantal chromosomen.'
    },
    '4.4.3': {
      more: 'De twee DNA-strengen gaan uiteen; DNA-polymerase bouwt aan elke oude streng een complementaire nieuwe streng. A paart met T en G met C. Elke nieuwe dubbelhelix bevat dus één oude en één nieuwe streng: semiconservatieve replicatie. Controle- en herstelmechanismen beperken kopieerfouten.',
      worked: 'Een sjabloonstreng met basen A–G–T–C krijgt als nieuwe complementaire streng T–C–A–G. Je schrijft de paren niet als A–A of G–G.',
      sketch: ['compare', 'Oude streng', 'A · G · T · C', 'Nieuwe streng', 'T · C · A · G'],
      caption: 'Complementaire basen bepalen de nieuwe streng.'
    },
    '4.4.4': {
      more: 'In de profase condenseren chromosomen; in de metafase liggen ze bij het midden; in de anafase scheiden zusterchromatiden; in de telofase ontstaan nieuwe kernen. Cytokinese verdeelt daarna het cytoplasma. Mitose helpt bij groei en herstel en bewaart normaal de erfelijke informatie van de moedercel.',
      worked: 'Een lichaamscel heeft 2n = 46. Na replicatie en mitose volgen normaal twee dochtercellen met elk 46 chromosomen. Het antwoord is niet 23: halvering hoort bij meiose.',
      sketch: ['flow', 'Profase', 'Metafase', 'Anafase', 'Telofase'],
      caption: 'De zusterchromatiden scheiden in de anafase.'
    },
    '4.4.5': {
      more: 'Meiose omvat twee delingen na één DNA-replicatie. In meiose I vormen homologe chromosomen paren en worden ze gescheiden; crossing-over tussen niet-zusterchromatiden kan nieuwe combinaties maken. In meiose II scheiden zusterchromatiden. Willekeurige verdeling van homologen verhoogt variatie; non-disjunctie bij een scheidingsfout kan gameten met een afwijkend chromosomenaantal opleveren.',
      worked: 'Start met één diploïde menselijke cel (46 chromosomen). Bij een normaal verloop ontstaan na beide delingen vier haploïde cellen (23 per cel). Als een chromosoompaar niet scheidt, kan een gameet 22 of 24 chromosomen krijgen.',
      sketch: ['flow', '2n: één cel', 'Meiose I: homologen', 'Meiose II: chromatiden', 'n: vier cellen'],
      caption: 'Eerst scheiden homologen, daarna zusterchromatiden.'
    },
    '4.4.6': {
      more: 'Spermatogenese loopt vanaf de puberteit doorgaans door; uit een primaire spermatocyt ontstaan na meiose vier spermatiden die verder rijpen. Oögenese start al vóór de geboorte. Een primaire oöcyt voltooit meiose I pas rond de ovulatie; meiose II wordt bij de mens doorgaans pas na bevruchting afgerond. De ongelijk verdeelde celinhoud blijft vooral in één grote eicel.',
      worked: 'Teken de producten van één primaire geslachtscel: bij spermatogenese vier kleine functionele zaadcellen; bij oögenese één grote eicel plus poollichaampjes. Beide routes halveren het chromosomenaantal.',
      sketch: ['compare', 'Spermatogenese', '4 functionele cellen', 'Oögenese', '1 grote eicel'],
      caption: 'De verdeling van cytoplasma verschilt.'
    },
    '4.5.1': {
      more: 'Een gen is een DNA-gebied met een functie, een allel is een variant daarvan. Homologe chromosomen dragen overeenkomstige genen, vaak met verschillende allelen. Een genotype kan bijvoorbeeld Aa zijn; het fenotype hangt samen met genexpressie en de omgeving. Diploïd betekent twee chromosoomsets, haploïd één.',
      worked: 'Bij een eenvoudig dominant model heeft Aa hetzelfde zichtbare dominante fenotype als AA, terwijl de genotypes verschillen. Vraag bij een opgave steeds of het om allelen (A/a) of een zichtbaar kenmerk gaat.',
      sketch: ['flow', 'Chromosoom', 'Gen → allelen', 'Genotype', 'Fenotype'],
      caption: 'Van DNA-variant naar waarneembaar kenmerk.'
    },
    '4.5.2': {
      more: 'Schrijf bij een kruising eerst de mogelijke gameten van beide ouders op. Voor Aa × Aa geeft een dominant-recessief model AA, Aa, Aa en aa; de verwachte genotypeverhouding is 1:2:1. Bij codominantie zijn twee allelen samen zichtbaar (zoals A en B); bij intermediaire dominantie ontstaat een tussenvorm. Meerdere allelen bestaan in de populatie, maar één diploïd individu heeft maximaal twee allelen per gen. Bij epistasie beïnvloedt een gen de uiting van een ander; gekoppelde genen worden vaak samen overgeërfd, tenzij recombinatie plaatsvindt. Geslachtsgebonden genen vragen extra aandacht voor X- of Y-chromosomen; letale combinaties veranderen de verhouding onder levende nakomelingen.',
      worked: 'Bij een autosomaal recessief kenmerk zijn beide ouders drager (Aa × Aa). Vul de vier vakjes: AA, Aa, Aa, aa. De kans op aa per kind is 1/4; de kans op dragerschap is 2/4. Een volgende geboorte is opnieuw een afzonderlijke kansgebeurtenis.',
      sketch: ['punnett', 'A', 'a', 'A', 'a'],
      caption: 'Kruising Aa × Aa: maak eerst een Punnett-schema.'
    },
    '4.5.3': {
      more: 'Gebruik een stamboom als een reeks beperkingen. Een kind met een autosomaal recessief kenmerk kan twee niet-aangedane dragers als ouders hebben. Een dominant kenmerk verschijnt vaak in opeenvolgende generaties, maar uitzonderingen en onvolledige penetrantie vragen voorzichtigheid. Bij X-gebonden recessieve overerving komen aangedane jongens vaak uit niet-aangedane draagsters; een vader geeft zijn X niet aan zijn zoons.',
      worked: 'Twee niet-aangedane ouders krijgen een aangedane dochter. In een eenvoudig autosomaal recessief model zijn beide ouders Aa en is de dochter aa. Een eenvoudig X-gebonden recessief model past hier niet als de vader niet aangedaan is.',
      sketch: ['flow', 'Ouder Aa', 'Ouder Aa', 'Kind aa'],
      caption: 'Twee gezonde dragers kunnen een aangedaan kind krijgen.'
    },
    '4.6.1': {
      more: 'DNA bestaat uit een volgorde van A, T, G en C. Een deel ervan kan worden afgelezen tot RNA; bij een eiwitcoderend gen leest een ribosoom mRNA per drie basen (codons). Eén codon komt overeen met een aminozuur of een stopsignaal. Verschillende codons kunnen hetzelfde aminozuur coderen, zodat niet elke DNA-verandering het eiwit wijzigt.',
      worked: 'Een mRNA-fragment AUG–GCU bevat twee codons. Het ribosoom leest AUG als startsignaal en leest daarna GCU; lees de zes basen niet als zes afzonderlijke aminozuren.',
      sketch: ['flow', 'DNA-basen', 'mRNA-codons', 'Aminozuren', 'Eiwit'],
      caption: 'De informatie wordt in codons van drie basen gelezen.'
    },
    '4.6.2': {
      more: 'In de kern wordt DNA bij transcriptie overgeschreven naar pre-mRNA. Na bewerking, waaronder het verwijderen van introns en verbinden van exons (splicing), kan rijp mRNA naar een ribosoom gaan. Daar brengen tRNA-moleculen passende aminozuren bij codons; na translatie kan het eiwit worden gevouwen of chemisch aangepast. Niet elk RNA codeert overigens voor een eiwit.',
      worked: 'Stel dat pre-mRNA uit exon 1 – intron – exon 2 bestaat. Na splicing bevat rijp mRNA exon 1 – exon 2. Het ribosoom leest dus normaal de aaneengesloten coderende informatie.',
      sketch: ['flow', 'DNA', 'Pre-mRNA', 'Splicing', 'Eiwit'],
      caption: 'RNA-bewerking vindt plaats vóór translatie.'
    },
    '4.6.3': {
      more: 'Een transcriptiefactor kan aan een regelgebied van DNA binden en zo de transcriptie stimuleren of remmen. Ook de toegankelijkheid van het DNA speelt mee; meerdere signalen samen bepalen of een gen wordt afgelezen. Daarom delen spier- en zenuwcellen grotendeels hetzelfde genoom maar maken ze andere hoeveelheden eiwitten.',
      worked: 'Een signaal activeert een transcriptiefactor die de aflezing van een gen verhoogt. Het mRNA en meestal het bijbehorende eiwit nemen toe, zonder dat de DNA-volgorde van dat gen verandert.',
      sketch: ['flow', 'Signaal', 'Transcriptiefactor', 'Gen aan/uit', 'Eiwitniveau'],
      caption: 'Regulatie verandert de aflezing, niet noodzakelijk de code.'
    },
    '4.6.4': {
      more: 'Op het niveau van een DNA-sequentie onderscheid je substitutie, insertie en deletie. Een insertie of deletie die niet uit een veelvoud van drie basen bestaat, kan het leesraam verschuiven. Op chromosoomniveau kunnen stukken verloren gaan, verdubbelen, omkeren of verplaatsen; bij een afwijkend aantal chromosomen spreek je van een numerieke chromosoomafwijking.',
      worked: 'De codons AAA | GGC | UAU verliezen vroeg in de reeks één base. Vanaf dat punt ontstaan vaak andere triplets: een leesraamverschuiving. Bij verlies van drie basen blijft het leesraam meestal intact, al kan één aminozuur ontbreken.',
      sketch: ['compare', 'Substitutie', 'één base anders', 'Insertie/deletie', 'leesraam kan schuiven'],
      caption: 'Het effect hangt af van soort én plaats van de mutatie.'
    },
    '4.6.5': {
      more: 'Een modificatie van genexpressie kan ontstaan door invloeden van buitenaf zonder dat de basenvolgorde verandert. Epigenetische mechanismen omvatten onder meer DNA-methylering en veranderingen aan histonen. Deze markeringen beïnvloeden hoe toegankelijk DNA is; hun effect hangt af van de plaats en context en is niet altijd blijvend of erfelijk over generaties.',
      worked: 'Een regelgebied wordt minder toegankelijk door veranderingen aan chromatine. Het gen kan daardoor minder worden afgelezen. Het aantal A-, T-, G- en C-basen is nog hetzelfde: dit is geen DNA-sequentiemutatie.',
      sketch: ['compare', 'DNA-code', 'zelfde letters', 'Toegankelijkheid', 'meer of minder aflezing'],
      caption: 'Genexpressie kan wijzigen zonder nieuwe basenvolgorde.'
    },
    '4.6.6': {
      more: 'Een synonieme mutatie laat hetzelfde aminozuur ontstaan; een missensemutatie verandert een aminozuur en een nonsensemutatie brengt een voortijdig stopcodon. Een mutatie in een regelgebied kan de hoeveelheid eiwit wijzigen. Het gevolg voor een individu hangt af van de functie van het gen, de omgeving en of de verandering bijvoorbeeld in lichaams- of geslachtscellen zit.',
      worked: 'Twee DNA-veranderingen worden vergeleken: de eerste verandert het codon maar niet het aminozuur; de tweede veroorzaakt vroeg een stopcodon. De tweede heeft vaker een grote invloed op het eiwit, al hangt het echte effect van het gen af.',
      sketch: ['compare', 'Synoniem', 'zelfde aminozuur', 'Vroeg stopcodon', 'verkort eiwit'],
      caption: 'Niet elke mutatie verandert eiwit of fenotype even sterk.'
    },
    '4.6.7': {
      more: 'Chromosomen worden in een karyogram meestal gerangschikt naar grootte, bandenpatroon en centromeerpositie. Controleer eerst de totale telling, vergelijk dan homologe paren en kijk naar de geslachtschromosomen. Een extra of ontbrekend volledig chromosoom kun je vaak zien; een wijziging van één DNA-base niet.',
      worked: 'Je telt 47 chromosomen en ziet drie exemplaren van chromosoom 21. Schrijf: trisomie 21. Om de exacte basenvolgorde van een gen te kennen is een andere onderzoeksmethode nodig.',
      sketch: ['compare', 'Paar 21', '2 exemplaren', 'Trisomie 21', '3 exemplaren'],
      caption: 'Een extra chromosoom valt op bij het tellen van paren.'
    },
    '4.6.8': {
      more: 'Bij klassieke veredeling kies je ouders of nakomelingen met gewenste erfelijke eigenschappen. PCR vermenigvuldigt een gekozen DNA-fragment met herhaalde cycli van scheiden, primerbinding en verlengen. Restrictie-enzymen kunnen specifieke DNA-sequenties knippen; gelelektroforese scheidt fragmenten vooral op lengte. Een DNA-profiel vergelijkt meerdere variabele DNA-gebieden. Mitochondriaal DNA volgt meestal de moederlijke lijn; het Y-chromosoom doorgaans de vaderlijke lijn, zodat elk maar een deel van iemands afstamming beschrijft.',
      worked: 'Een DNA-staal is erg klein. Eerst vermeerder je een relevant fragment met PCR, dan vergelijk je fragmentpatronen via gelelektroforese. Een gedeelde band alleen bewijst geen unieke identiteit; de interpretatie hangt af van het aantal onderzochte gebieden.',
      sketch: ['flow', 'DNA-staal', 'PCR-kopieën', 'Gel: scheiding', 'Vergelijken'],
      caption: 'Van een klein staal naar een interpreteerbaar patroon.'
    },
    '4.7.1': {
      more: 'In de testes ontstaan zaadcellen; via bijbal en zaadleider kunnen ze bij ejaculatie naar buiten. In de ovaria rijpen eicellen. Na de eisprong kan een eicel via de eileider richting baarmoeder gaan; het baarmoederslijmvlies kan een embryo ontvangen. De baarmoederhals verbindt de baarmoeder met de vagina.',
      worked: 'Zet de plaatsen op volgorde: ovarium → eileider → baarmoeder. Bevruchting gebeurt gewoonlijk in de eileider; de innesteling vindt gewoonlijk in het baarmoederslijmvlies plaats.',
      sketch: ['flow', 'Ovarium', 'Eileider', 'Baarmoeder'],
      caption: 'Plaats van eisprong, bevruchting en innesteling.'
    },
    '4.7.2': {
      more: 'De hypothalamus geeft GnRH af, wat de hypofyse tot afgifte van FSH en LH stimuleert. FSH ondersteunt follikelgroei, terwijl een LH-piek de eisprong in gang zet. Daarna maakt het gele lichaam progesteron en ook oestrogenen, die het baarmoederslijmvlies beïnvloeden. Terugkoppeling tussen deze hormonen zorgt voor een wisselend verloop door de cyclus.',
      worked: 'In een hormoongrafiek zie je midden in de cyclus een duidelijke LH-piek. Die plaats je vlak vóór de ovulatie; een latere stijging van progesteron past bij de fase na de eisprong.',
      sketch: ['flow', 'GnRH', 'FSH + LH', 'Eisprong', 'Progesteron'],
      caption: 'Hormonen sturen de volgorde in de ovariumcyclus.'
    },
    '4.7.3': {
      more: 'Beide processen starten vanuit diploïde voorlopercellen en gebruiken meiose om haploïde cellen te vormen. Bij spermatogenese wordt de celinhoud vrij gelijk verdeeld; spermatiden rijpen nog verder tot zaadcellen. Bij oögenese blijft het meeste cytoplasma in één cel en ontstaan poollichaampjes. De menselijke oöcyt voltooit meiose II normaal alleen na bevruchting.',
      worked: 'Geef het chromosomenaantal: een primaire spermatocyt heeft 46 chromosomen, een volwassen zaadcel 23. Voor een eicel geldt ook 23 na voltooiing van de meiose.',
      sketch: ['compare', 'Primair: 2n', '46 chromosomen', 'Gameet: n', '23 chromosomen'],
      caption: 'Meiose halveert bij beide routes het chromosomenaantal.'
    },
    '4.7.4': {
      more: 'Na contact van een zaadcel met de eicel vindt een reeks herkennings- en versmeltingsstappen plaats. De eicel reageert zodat andere zaadcellen niet gemakkelijk meer binnendringen. De haploïde genetische bijdragen vormen samen een diploïde zygote. De vroege klievingsdelingen vergroten eerst het aantal cellen zonder dat het embryo meteen veel groter wordt.',
      worked: 'Een normale menselijke eicel heeft 23 chromosomen en een zaadcel 23. De zygote heeft dan 46 chromosomen. Twee volledige diploïde sets optellen (46 + 46) zou een verkeerde voorstelling van de gameten zijn.',
      sketch: ['flow', 'Eicel: 23', 'Zaadcel: 23', 'Zygote: 46'],
      caption: 'Twee haploïde bijdragen vormen één diploïde zygote.'
    },
    '4.7.5': {
      more: 'De zygote deelt en bereikt de baarmoeder als vroeg embryo; na innesteling ontwikkelen weefsels en organen zich en spreekt men later van een foetus. hCG helpt aanvankelijk het gele lichaam in stand houden; later levert de placenta belangrijke hormonen. Via de placenta wisselen moederlijk en foetaal bloed stoffen uit zonder normaal rechtstreeks te mengen; de navelstreng verbindt foetus en placenta en de vruchtwaterzak beschermt. Anticonceptie grijpt bijvoorbeeld aan bij zaadcellen, eisprong of innestelingsvoorwaarden. Een condoom helpt ook tegen soa’s; de betrouwbaarheid van methoden verschilt in ideaal en werkelijk gebruik.',
      worked: 'Plaats drie functies: placenta = uitwisselingsoppervlak, navelstreng = verbinding met de foetus, vruchtwaterzak = beschermende vloeistofruimte. Bij vergelijking van anticonceptie kijk je afzonderlijk naar zwangerschapskans en soa-bescherming.',
      sketch: ['flow', 'Embryo', 'Placenta', 'Navelstreng', 'Foetus'],
      caption: 'De placenta en navelstreng verzorgen de uitwisselingsroute.'
    },
    '4.8.1': {
      more: 'Macrofagen nemen lichaamsvreemde deeltjes op en kunnen fragmenten daarvan aan andere afweercellen presenteren. B-lymfocyten kunnen zich ontwikkelen tot plasmacellen die antistoffen maken; T-lymfocyten helpen afweerreacties sturen of geïnfecteerde cellen opruimen. Dit zijn voorbeelden van samenwerking tussen aangeboren en verworven afweer.',
      worked: 'Een macrofaag slokt een bacterie op. Daarna kan presentatie van een bacteriefragment helpen bij activatie van specifieke lymfocyten. Fagocytose is opname; antistofproductie is een taak van geactiveerde B-cellen.',
      sketch: ['flow', 'Bacterie', 'Macrofaag', 'Presentatie', 'Lymfocyt'],
      caption: 'Een afweercel kan een andere afweerroute op gang helpen.'
    },
    '4.8.2': {
      more: 'Een antigeen is een moleculaire structuur die door onderdelen van het afweersysteem herkend kan worden. Een antilichaam bindt met specifieke bindingsplaatsen aan een passend antigeen. Antilichamen kunnen ziekteverwekkers neutraliseren, samenklonteren of markeren voor opname door andere afweercellen. Specificiteit berust op de combinatie van vorm en chemische eigenschappen.',
      worked: 'Een plasmacel maakt antilichamen die aan antigeen A binden. Bij een ziekteverwekker met alleen antigeen B verwacht je niet automatisch dezelfde binding: vergelijk eerst de herkenningsplaatsen.',
      sketch: ['flow', 'Antigeen', 'Passend antilichaam', 'Markering', 'Opruiming'],
      caption: 'Passende binding kan opruiming vergemakkelijken.'
    },
    '4.8.3': {
      more: 'Bloedgroep A draagt A-antigenen op rode bloedcellen en heeft doorgaans anti-B in plasma; B draagt B en heeft anti-A; AB draagt beide en heeft normaal geen anti-A/anti-B; O draagt geen A of B en heeft doorgaans beide antistoffen. Rhesuspositief betekent dat het D-antigeen aanwezig is. Bij transfusie beoordeel je antigenen van de donor tegenover antistoffen van de ontvanger; medische compatibiliteitscontrole blijft altijd noodzakelijk.',
      worked: 'Een persoon met bloedgroep A heeft normaal anti-B. Rode bloedcellen van groep B dragen B-antigenen en zijn daarom in dit vereenvoudigde ABO-schema ongeschikt als donatie aan deze ontvanger.',
      sketch: ['compare', 'Groep A', 'A op rode cel; anti-B', 'Groep B', 'B op rode cel; anti-A'],
      caption: 'Vergelijk donorantigeen met antistof van de ontvanger.'
    },
    '4.8.4': {
      more: 'Bij actieve immunisatie maakt het lichaam na blootstelling aan een antigeen zelf een afweerrespons; geheugen B- en T-cellen kunnen bij een volgende blootstelling sneller reageren. Bij passieve immunisatie worden bestaande antilichamen gegeven. Dat werkt snel, maar levert doorgaans geen eigen immunologisch geheugen op. Natuurlijke passieve overdracht van antistoffen kan ook van ouder naar kind plaatsvinden.',
      worked: 'Je krijgt een vaccin en bouwt zelf antistoffen en afweergeheugen op: actief. Je krijgt kant-en-klare specifieke immunoglobulinen: passief, met snelle maar tijdelijke bescherming.',
      sketch: ['compare', 'Actief', 'zelf antistoffen + geheugen', 'Passief', 'ontvangen antistoffen'],
      caption: 'Wie maakt de antistoffen: jouw lichaam of een andere bron?'
    },
    '4.9.1': {
      more: 'Na een maaltijd bevordert insuline onder andere glucoseopname door spier- en vetcellen en opslag van glucose als glycogeen. Bij dalende bloedglucose stimuleert glucagon vooral in de lever het beschikbaar maken van glucose. Adrenaline helpt bij snelle inspanning of stress glucose vrijmaken. De hormonen werken in een terugkoppelingssysteem rond de bloedglucosespiegel.',
      worked: 'Een grafiek toont stijgende bloedglucose na eten: verwacht daarop een toename van insuline. Na een tijd zonder eten kan glucagon helpen de glucosevoorziening op peil te houden.',
      sketch: ['compare', 'Na maaltijd', 'insuline ↑', 'Bij vasten', 'glucagon ↑'],
      caption: 'De hormoonrespons hangt samen met de glucosebeschikbaarheid.'
    },
    '4.9.2': {
      more: 'Een receptor zet een prikkel om in een elektrisch signaal. Een sensibele neuron voert die naar het centrale zenuwstelsel, waar één of meer synapsen het signaal doorgeven. Een motorische neuron stuurt de effector aan, bijvoorbeeld een spier. De terugtrekreflex kan al via het ruggenmerg beginnen voordat je de pijn bewust waarneemt.',
      worked: 'Je raakt een hete pan aan. Volg de route: huidreceptor → sensibele zenuwcel → ruggenmerg → motorische zenuwcel → buigspier. De spier is de effector; de pan is de prikkelbron.',
      sketch: ['flow', 'Receptor', 'Sensibel', 'Ruggenmerg', 'Spier'],
      caption: 'Het signaal bereikt de spier via een vaste reflexroute.'
    },
    '4.9.3': {
      more: 'Skeletspier is dwarsgestreept en meestal willekeurig aanstuurbaar; hartspier is ook dwarsgestreept maar werkt ritmisch en onwillekeurig; gladde spier zit onder meer in darm- en vaatwanden. In skeletspier schuiven actine- en myosinefilamenten langs elkaar en is ATP nodig voor de contractiecyclus. Een spier trekt aan een bot via een pees, en voor tegengestelde bewegingen werken spieren vaak in paren.',
      worked: 'Bij buiging van de elleboog verkort de biceps en ontspant de triceps relatief; voor strekking is de triceps actief. Een spier duwt het bot niet van zich af: zij trekt via de pees.',
      sketch: ['compare', 'Elleboog buigt', 'biceps trekt', 'Elleboog strekt', 'triceps trekt'],
      caption: 'Tegengestelde bewegingen vragen andere actieve spieren.'
    },
    '4.10.1': {
      more: 'Fossielen tonen dat organismen in vroegere perioden anders waren en bieden soms overgangsvormen. Homologe structuren hebben een overeenkomstige oorsprong ondanks verschillende functies; DNA-vergelijkingen helpen verwantschap toetsen. Ook geografische verspreiding en waargenomen evolutie, bijvoorbeeld bij micro-organismen, leveren aanwijzingen. Onafhankelijke bewijslijnen versterken samen de verklaring van gemeenschappelijke afstamming.',
      worked: 'Vergelijk de voorpoot van mens, vleermuis en walvis: dezelfde basale botvolgorde heeft functies als grijpen, vliegen en zwemmen. Dat patroon past bij gemeenschappelijke afstamming met latere aanpassing.',
      sketch: ['flow', 'Fossielen', 'Bouwplan', 'DNA', 'Verwantschap'],
      caption: 'Verschillende soorten bewijs ondersteunen één stamboom.'
    },
    '4.10.2': {
      more: 'Lamarck verklaarde aanpassing onder meer door gebruik en onbruik van organen en overerving van verworven eigenschappen. Darwin beschreef dat erfelijke verschillen tussen individuen, samen met strijd om bestaan, tot ongelijke voortplanting kunnen leiden. De moderne synthese combineert natuurlijke selectie met erfelijkheid, mutatie en veranderingen in allelfrequenties. De omgeving verandert welke varianten een voordeel hebben; individuen veranderen hun DNA niet doelgericht omdat ze iets nodig hebben.',
      worked: 'In een populatie giraffen variëren nek-lengtes erfelijk. Als langere nekken in een bepaalde omgeving meer nakomelingen opleveren, kan de variant over generaties vaker worden. Eén giraffe rekt zijn nek niet zó dat zijn nakomelingen daardoor automatisch langere nekken erven.',
      sketch: ['compare', 'Lamarck', 'verworven eigenschap', 'Darwin + genetica', 'erfelijke variatie + selectie'],
      caption: 'Het mechanisme achter verandering is het belangrijke verschil.'
    },
    '4.10.3': {
      more: 'Natuurlijke selectie hangt samen met verschillen in overleving en voortplanting in een gegeven omgeving. Bij kunstmatige selectie kiest de mens welke individuen nakomelingen krijgen. Genetische drift is een toevallige verschuiving van allelfrequenties, vooral zichtbaar in kleine populaties; een bottleneck of stichtereffect kan drift versterken. Een variant die toeneemt, hoeft dus niet altijd een voordeel te hebben.',
      worked: 'Een storm doodt willekeurig een groot deel van een kleine populatie. Een zeldzaam allel verdwijnt zonder dat het nadelig was: drift. Als een erfelijk kenmerk onder voedseltekort consequent meer nakomelingen oplevert, denk je aan natuurlijke selectie.',
      sketch: ['compare', 'Selectie', 'verschil in voortplanting', 'Drift', 'toeval in populatie'],
      caption: 'Bij drift zegt de verandering op zichzelf niets over voordeel.'
    },
    '4.10.4': {
      more: 'Een populatie bevat individuen van dezelfde soort die op een bepaalde plaats en tijd leven en onderling genen kunnen uitwisselen. De genenpool omvat hun allelen. Evolutie kun je meten als verschuiving van allelfrequenties door generaties. Het biologische soortbegrip focust op onderlinge voortplanting met vruchtbare nakomelingen, maar werkt minder goed voor aseksuele organismen en fossielen.',
      worked: 'In generatie 1 komt allel A voor bij 30% van de getelde allelen; in generatie 10 bij 55%. De populatie is genetisch veranderd. Dat bewijst niet dat één individueel dier tijdens zijn leven evolueerde.',
      sketch: ['flow', 'Populatie', 'Allelen tellen', 'Generaties', 'Nieuwe frequentie'],
      caption: 'Evolutie meet je over generaties in een populatie.'
    },
    '4.10.5': {
      more: 'Een geografische barrière kan de genenuitwisseling verminderen; ook verschil in leefgebied, gedrag of voortplantingstijd kan groepen isoleren. Mutaties, selectie en drift veranderen daarna de populaties onafhankelijk. Ontstaan uiteindelijk voortplantingsbarrières, dan kunnen ze niet meer vrij genen uitwisselen. Soortvorming is doorgaans een proces over vele generaties en vereist niet altijd een fysieke scheiding.',
      worked: 'Een rivier splitst een populatie. Aan beide oevers werken andere omstandigheden en toevallige veranderingen. Na lange tijd herkennen de groepen elkaars paringssignalen misschien niet meer: gedragsmatige isolatie na geografische scheiding.',
      sketch: ['flow', 'Eén populatie', 'Isolatie', 'Aparte verandering', 'Twee soorten'],
      caption: 'Langdurig beperkte genenuitwisseling kan soortvorming mogelijk maken.'
    }
  };

  const esc = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const label = (value, x, y, color, size = 12) => `<text x="${x}" y="${y}" fill="${color}" font-size="${size}" font-weight="700" text-anchor="middle" font-family="system-ui, sans-serif">${esc(value)}</text>`;
  const wrappedLabel = (value, x, y, color, size, maxChars) => {
    const lines = [''];
    for (const word of value.split(' ')) {
      const last = lines.length - 1;
      if ((lines[last] + (lines[last] ? ' ' : '') + word).length > maxChars && lines[last]) lines.push(word);
      else lines[last] += (lines[last] ? ' ' : '') + word;
    }
    return `<text fill="${color}" font-size="${size}" font-weight="700" text-anchor="middle" font-family="system-ui, sans-serif">${lines.map((line,i)=>`<tspan x="${x}" y="${y + (i-(lines.length-1)/2)*13}">${esc(line)}</tspan>`).join('')}</text>`;
  };
  const ellipse = (cx, cy, rx, ry, fill, stroke) => `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="${fill}" stroke="${stroke}" stroke-width="2"/>`;
  const doodles = {
    '4.1': '<rect x="6" y="10" width="33" height="18" rx="9"/><path d="M12 8V4m10 5V4m13 8 4-4m-3 17 5 3M6 18H2m13-1h3m8 0h3"/>',
    '4.2': '<circle cx="22" cy="19" r="16"/><circle cx="21" cy="18" r="6"/><path d="M7 20c4 2 6 0 8-2m13 7 7 3m-7-18 6-3"/>',
    '4.3': '<ellipse cx="22" cy="20" rx="19" ry="13"/><path d="m8 20 6-5 5 10 6-11 6 9 5-6"/>',
    '4.4': '<path d="M9 4c20 13 20 20 0 32M35 4C15 17 15 24 35 36"/><circle cx="22" cy="20" r="4"/>',
    '4.5': '<path d="M6 8c20 1 11 23 31 25M37 8C17 9 26 32 6 33M11 13h21M14 20h16M11 27h21"/>',
    '4.6': '<path d="M7 4c30 6 0 26 30 32M37 4C7 10 37 30 7 36M11 9h22M10 17h24M11 25h22M11 33h22"/>',
    '4.7': '<circle cx="28" cy="20" r="14"/><circle cx="28" cy="20" r="5"/><path d="M2 11c5-8 8 3 11 3m0 0 8 3m-8-3-5 9"/>',
    '4.8': '<path d="M20 37V18L9 7m11 11L32 7M9 7l-5 4m5-4 5 1m18-1 5 4m-5-4-5 1"/><circle cx="20" cy="18" r="3"/>',
    '4.9': '<circle cx="20" cy="18" r="8"/><path d="M12 15 4 8m8 14-7 8m22-13 14-8M27 22l14 9m-13-14 10-2m-28 4-7 1"/>',
    '4.10': '<path d="M21 37V23M21 25 8 15m13 10 13-12M8 15 4 6m4 9 1-9m25 7-1-8m1 8 7-6"/><circle cx="4" cy="5" r="2"/><circle cx="41" cy="7" r="2"/>'
  };
  function sketchSvg(code) {
    const item = lessons[code];
    if (!item) return '';
    const [kind, ...steps] = item.sketch;
    const ink = '#174a4d', teal = '#0e918a', blue = '#5567cd', pale = '#e4f8f3';
    let shapes = '';
    if (kind === 'punnett') {
      const [topA, topB, sideA, sideB] = steps;
      shapes = `<path d="M117 19V166 M204 19V166 M33 74H291 M33 119H291" stroke="${teal}" stroke-width="2"/>`
        + label(topA,160,63,blue,16) + label(topB,248,63,blue,16)
        + label(sideA,77,105,blue,16) + label(sideB,77,149,blue,16)
        + label(sideA+topA,160,105,ink,16) + label(sideA+topB,248,105,ink,16)
        + label(sideB+topA,160,149,ink,16) + label(sideB+topB,248,149,ink,16);
    } else if (kind === 'compare') {
      shapes = `<rect x="13" y="24" width="142" height="130" rx="19" fill="#e4f8f3"/><rect x="169" y="24" width="142" height="130" rx="19" fill="#eef0ff"/>`
        + ellipse(84,50,16,16,'#b2e8d9',teal) + ellipse(240,50,16,16,'#cdd5ff',blue)
        + label('1',84,55,ink,14) + label('2',240,55,blue,14)
        + wrappedLabel(steps[0],84,89,ink,12,18) + wrappedLabel(steps[2],240,89,ink,12,18)
        + wrappedLabel(steps[1],84,119,'#3b5b60',10.5,22) + wrappedLabel(steps[3],240,119,'#4c557e',10.5,22);
    } else {
      const count = steps.length, width = count === 4 ? 64 : count === 3 ? 85 : 100;
      const gap = count === 4 ? 13 : count === 3 ? 19 : 20;
      const left = (324 - (count * width + (count - 1) * gap)) / 2;
      shapes = steps.map((step, i) => {
        const x = left + i * (width + gap), cx = x + width / 2;
        const isLast = i === count-1;
        return `<rect x="${x}" y="61" width="${width}" height="75" rx="16" fill="${i % 2 ? '#edf0ff' : pale}" stroke="${i % 2 ? '#c9d0f3' : '#bde9dc'}"/>`
          + ellipse(cx,79,10,10,i % 2 ? '#d3d9ff' : '#a6e5d1',i % 2 ? blue : teal)
          + label(String(i+1),cx,83,ink,10)
          + wrappedLabel(step,cx,112,ink, count === 4 ? 9.3 : 10.5, count === 4 ? 12 : 16)
          + (isLast ? '' : `<path d="M${x+width+2} 99h${gap-6}m-5-4 5 4-5 4" stroke="${teal}" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`);
      }).join('');
    }
    const doodle = doodles[code.replace(/\.\d+$/, '')] || '';
    return `<svg class="bio-sketch" viewBox="0 0 324 178" role="img" aria-label="${esc(item.caption)}" xmlns="http://www.w3.org/2000/svg"><rect x="1" y="1" width="322" height="176" rx="19" fill="#f9fffc" stroke="#cfece3"/><path d="M18 20h29M277 158h29" stroke="#a8dacf" stroke-width="3" stroke-linecap="round"/><g transform="translate(266 12)" fill="none" stroke="#38aba0" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${doodle}</g>${shapes}</svg>`;
  }
  const biology = window.KIW.find(s => s.id === 'biologie');
  for (const chapter of biology.chapters) for (const station of chapter.stations) {
    const item = lessons[station.code];
    if (item) { station.bioMore = item.more; station.bioWorked = item.worked; station.bioCaption = item.caption; }
  }
  window.BIO_DIAGRAM = sketchSvg;
  window.BIO_ENRICHMENT = lessons;
})();

/* Open hoofdstukken, verdieping per halte en zelfgemaakte oefeningen. */
(() => {
  const urls = {
    formula: 'https://assets.vlaanderen.be/image/upload/v1763468228/formularium2025_18.09.24_v2_jj9pbp.pdf',
    chemistry: 'https://assets.vlaanderen.be/image/upload/v1762943709/repositories-prd/Infotabel_Chemie_2026_1_r4k1tp.pdf'
  };
  const chapters = {
    '1.1': {
      subtitle: 'Van rekenregels tot matrices: leer eerst het verband zien, dan pas rekenen.',
      guide: 'Voor algebra staat op het officiële blad vooral een tabel met getallen. De rekenregels en oplossingsmethodes hieronder moet je zelf kennen.',
      supplied: [
        ['log₁₀ 2 ≈ 0,30', 'Waarde uit de logaritmetabel.'],
        ['log₁₀ 3 ≈ 0,48', 'Waarde uit dezelfde tabel.'],
        ['√2 ≈ 1,41', 'Numerieke benadering op het examenblad.'],
        ['e¹ ≈ 2,72', 'Waarde uit de tabel met exponentiële waarden.']
      ],
      know: [
        ['D = b² − 4ac', 'Discriminant voor ax² + bx + c = 0, met a ≠ 0.'],
        ['x = (−b ± √D) / (2a)', 'Alleen reële oplossingen als D ≥ 0.'],
        ['aᵐ · aⁿ = aᵐ⁺ⁿ', 'Product van machten met hetzelfde grondtal.'],
        ['logₐ(xy) = logₐx + logₐy', 'Voor a > 0, a ≠ 1 en x,y > 0.'],
        ['rest bij P(x) ÷ (x − a) = P(a)', 'Deelregel voor veeltermen; (x − a) is een factor als P(a) = 0.'],
        ['y = kx ··· y = k/x', 'Recht en omgekeerd evenredig; bij k/x geldt x ≠ 0.']
      ],
      stations: {
        '1.1.1': ['Een lettervorm is een schrijfwijze met variabelen. Reken eerst haakjes en machten, dan producten en delingen, daarna sommen. Je kunt 2x en 3x samenvoegen, maar 2x en 3x² niet: de letterdelen zijn verschillend.', 'Werk 3(2x − 1) − 2x uit tot 4x − 3. Controleer eventueel met x = 2: beide uitdrukkingen geven 5.'],
        '1.1.2': ['|x| is de afstand van x tot nul en is dus nooit negatief. Voor |x − 2| < 3 ligt x minder dan 3 van 2 af: −1 < x < 5. Bij delen of vermenigvuldigen met een negatief getal keer je het ongelijkheidsteken om.', 'Los −3x ≥ 6 op: deel door −3 en draai ≥ om naar ≤. Je krijgt x ≤ −2; invullen van −2 geeft gelijkheid.'],
        '1.1.3': ['a⁻ⁿ = 1/aⁿ vereist a ≠ 0. Een logaritme is alleen reëel gedefinieerd voor een positief argument; het grondtal moet positief zijn en ongelijk aan 1. Begin bij logaritmische vergelijkingen dus met het domein, vóór je rekenregels gebruikt.', 'log₂(x − 1) = 3 vraagt x > 1. Omzetten naar een macht geeft x − 1 = 8, dus x = 9; die voldoet aan het domein.'],
        '1.1.4': ['Een stijging met 20% betekent vermenigvuldigen met 1,20; daarna een daling met 20% betekent vermenigvuldigen met 0,80. Het product is 0,96, dus niet terug bij het begin. Bij omgekeerde evenredigheid is het product van beide grootheden constant.', 'Vier mensen doen een taak in 6 uur. Bij dezelfde productiviteit doen acht mensen die taak in 3 uur: 4 × 6 = 8 × 3.'],
        '1.1.5': ['Herleid een vergelijking eerst naar 0 = ax² + bx + c. Bij D < 0 zijn er geen reële oplossingen, bij D = 0 één dubbele, bij D > 0 twee verschillende. Voor een eerstegraadsvergelijking is de onbekende alleen tot de eerste macht aanwezig.', 'Voor x² − 4x + 4 = 0 is D = 16 − 16 = 0; de enige reële oplossing is x = 2. Controleer in de oorspronkelijke vergelijking.'],
        '1.1.6': ['Bij deling van P door D schrijf je P = DQ + R met graad(R) < graad(D). De reststelling is het snelle geval D = x − a: dan R = P(a). Als P(a) = 0, is x − a een factor; zo vind je ook nulpunten.', 'Voor P(x) = x³ − 1 is P(1) = 0. Dus x − 1 is een factor en x³ − 1 = (x − 1)(x² + x + 1).'],
        '1.1.7': ['Een oplossing van een stelsel moet álle vergelijkingen tegelijk waar maken. Eliminatie maakt de coëfficiënt van één onbekende tegengesteld en telt de vergelijkingen op. Een stelsel kan één oplossing, geen oplossing of oneindig veel oplossingen hebben.', 'Uit 2x + y = 7 en x − y = 2 volgt door optellen 3x = 9, dus x = 3 en y = 1. Controle: 2·3 + 1 = 7.'],
        '1.1.8': ['Bij AB zijn de binnenste dimensies gelijk: (m×n)(n×p) levert m×p. Het element op rij i, kolom j is het scalair product van rij i van A en kolom j van B. In het algemeen geldt AB ≠ BA, en niet elk van beide producten hoeft te bestaan.', 'Voor A = [[1,2],[0,1]] en B = [[2,0],[3,1]] is het element linksboven van AB gelijk aan 1·2 + 2·3 = 8.']
      },
      practice: [
        {topic:'Tweedegraadsvergelijking',question:'Voor x² − 7x + 12 = 0: wat is de som van de twee oplossingen?',choices:['3','4','7','12'],correct:'C',steps:['Ontbind: x² − 7x + 12 = (x − 3)(x − 4).','De oplossingen zijn x = 3 en x = 4.','Hun som is 3 + 4 = 7.']},
        {topic:'Reststelling',question:'P(x) = 2x³ − 3x + 5. Wat is de rest als je P(x) deelt door x − 2?',choices:['9','13','15','17'],correct:'C',steps:['Bij deling door x − 2 is de rest gelijk aan P(2).','P(2) = 2 · 2³ − 3 · 2 + 5.','P(2) = 16 − 6 + 5 = 15.']},
        {topic:'Matrixproduct',question:'Bereken het matrixproduct AB.',matrices:[['A',[[2,1],[0,3]]],['B',[[1,4],[2,-1]]]],choices:['[[2, 4], [0, -3]]','[[4, 7], [6, -3]]','[[2, 13], [4, -1]]','[[4, 6], [7, -3]]'],correct:'B',steps:['Rij 1 × kolom 1: 2·1 + 1·2 = 4; rij 1 × kolom 2: 2·4 + 1·(−1) = 7.','Rij 2 × kolom 1: 0·1 + 3·2 = 6; rij 2 × kolom 2: 0·4 + 3·(−1) = −3.','Dus AB = [[4, 7], [6, -3]].']}
      ]
    },
    '2.3': {
      subtitle: 'Teken eerst lading en richting, reken daarna met krachten, veld en energie.',
      guide: 'De afbeeldingen tonen wat de formules betekenen. F en E zijn hier groottes; in de kaarten over richting zijn F en E vet gedrukt omdat je dan vectoren optelt. Q is een bronlading en q de testlading.',
      supplied: [
        ['F = k · |Q₁| · |Q₂| / r²', 'Grootte van de Coulombkracht tussen twee puntladingen, in N.'],
        ['E = k · |Q| / r²', 'Grootte van de veldsterkte van één puntlading, in N/C.'],
        ['V = k · Q / r', 'Potentiaal van één puntlading, in V; behoud het teken van Q.'],
        ['k = 9 · 10⁹ N·m²/C²', 'Constante van Coulomb op het examenblad.'],
        ['e = 1,60 · 10⁻¹⁹ C', 'Grootte van de elementaire lading op het examenblad.']
      ],
      know: [
        ['E = F / q', 'Definitie van de veldvector met een positieve testlading q.'],
        ['F = q · E', 'Vectorrelatie: bij negatieve q keert de krachtzin om.'],
        ['E_tot = E_1 + E_2 + ...', 'Tel veldbijdragen als vectoren met richting.'],
        ['ΔEₚ = q · ΔV', 'Potentiële energieverandering van een lading.'],
        ['ΔEₖ = −ΔEₚ', 'Alleen als uitsluitend de elektrische kracht arbeid verricht.']
      ],
      stations: {
        '2.3.1': ['Lading is een behouden grootheid: bij wrijving verplaatsen elektronen, er ontstaan geen nieuwe netto ladingen. Een tekort aan elektronen maakt een voorwerp positief; een overschot negatief. Een lading is een geheel veelvoud van de elementaire lading e.', 'Een voorwerp neemt 2 × 10¹⁰ elektronen op: q = −ne = −3,2 × 10⁻⁹ C. Het minteken geeft de soort lading aan.'],
        '2.3.2': ['In metalen kunnen elektronen zich door het materiaal verplaatsen, zodat een overschot aan lading zich op het oppervlak herverdeelt. In isolatoren bewegen ladingen niet vrij door het hele materiaal. Toch kan een isolator polariseren wanneer een externe lading de ladingsverdeling een beetje vervormt.', 'Een neutrale metalen bol nabij een negatieve staaf krijgt aan de nabije kant relatief positieve lading; het totale bolletje blijft zonder aarding neutraal.'],
        '2.3.3': ['Influentie is de herschikking van vrije lading in een geleider door een nabije lading zonder aanraking. Polarisatie is de beperkte verschuiving van gebonden lading in een isolator. Als een geleider tijdens influentie geaard wordt, kan er wel netto lading achterblijven na een juiste volgorde van stappen.', 'Een negatief geladen ballon trekt een neutraal papiersnipper aan: de nabije kant polariseert en de aantrekkingskracht op de nabije kant overheerst.'],
        '2.3.4': ['De Coulombformule geeft de grootte F; de kracht ligt langs de verbindingslijn. Gelijke tekens stoten af en tegengestelde trekken aan. Als de afstand verdrievoudigt, wordt de kracht negenmaal kleiner.', 'Bij Q₁ = +2 µC, Q₂ = −3 µC en r = 0,30 m is F = (9,00 · 10⁹)(6 · 10⁻¹²) / 0,09 = 0,60 N. De kracht is aantrekkend.'],
        '2.3.5': ['De veldpijl E geeft de richting van de kracht op een positieve testlading aan. Daarom wijst het veld van een positieve bronlading naar buiten en dat van een negatieve bronlading naar binnen. De veldsterkte hangt van de bronlading af, niet van de grootte van de kleine testlading die je er denkbeeldig plaatst.', 'Op q = +2 µC werkt F = 0,04 N naar rechts. Dan is de grootte E = F/q = 20 000 N/C; de veldpijl wijst naar rechts. Op een negatieve testlading werkt de kracht juist naar links.'],
        '2.3.6': ['In een homogeen veld blijft de grootte en richting van E ongeveer constant: teken evenwijdige pijlen met gelijke afstand. In een radiaal veld spreiden veldlijnen zich uit of lopen samen, waardoor de sterkte met 1/r² afneemt. Veldlijnen kruisen elkaar nooit.', 'Als je van 0,20 m naar 0,40 m van één puntlading gaat, is het radiale veld viermaal zo zwak.'],
        '2.3.7': ['Een dipool bestaat uit +q en −q. Veldlijnen starten bij + en eindigen bij −; nabij de ladingen zijn ze dichter op elkaar en is het veld sterker. Midden tussen gelijke tegengestelde ladingen wijzen beide veldbijdragen van + naar −, dus ze versterken daar.', 'Tussen + links en − rechts tekent een positieve testlading een krachtpijl naar rechts: weg van + én naar −.'],
        '2.3.8': ['Voor de krachtpijl geldt F = q · E als vectorregel: een positieve lading versnelt met de veldpijl mee, een negatieve ertegenin. Voor de groottes geldt F = |q| · E. Bij een homogeen veld is de kracht bij constante q overal dezelfde; bij een radiaal veld verandert de grootte met de plaats. Vergeet massa niet als naar versnelling wordt gevraagd: a = F/m.', 'Een elektron in een naar rechts gericht homogeen veld ondervindt een kracht naar links, ook al wijzen de veldlijnen naar rechts.'],
        '2.3.9': ['Teken voor de onderzochte lading een aparte Coulombkracht door elke andere lading. Bereken de afstanden en groottes per paar, kies een assenstelsel en tel de x- en y-componenten op. Een negatief resultaat voor een component geeft de richting aan; de grootte van de resultante blijft niet negatief.', 'Werkt 3 N naar rechts en 4 N omhoog op dezelfde lading, dan is de resultante √(3² + 4²) = 5 N schuin rechts omhoog.'],
        '2.3.10': ['Het veld op een punt is onafhankelijk van de lading die je daar later plaatst. Door superpositie tel je de afzonderlijke veldvectoren op; één positieve en één negatieve bron kunnen velden tussen beide in dezelfde richting geven. Controleer symmetrie vóór je lang rekent.', 'Tussen twee gelijke positieve bronladingen heffen de velden zich in het midden op. Voor twee tegengestelde bronladingen versterken ze er elkaar.'],
        '2.3.11': ['Potentiaal V is een scalair: bijdragen van verschillende ladingen tel je algebraïsch op, mét teken. Potentiële energie Eₚ = qV hangt bovendien af van de testlading. Potentiaalverschillen hebben een fysieke betekenis; het gekozen nulpunt is een afspraak.', 'Bij V = −4 V heeft q = +2 C de energie −8 J ten opzichte van het nulpunt. Voor q = −2 C wordt het +8 J.'],
        '2.3.12': ['Een positieve lading die in de veldrichting beweegt, gaat naar lagere potentiaal. ΔEₚ = qΔV en bij alleen elektrische kracht geldt ΔEₖ = −ΔEₚ. Voor negatieve ladingen kan de verplaatsingsrichting omkeren: reken eerst met de tekens.', 'Een q = +2 µC doorloopt ΔV = −100 V. ΔEₚ = −2 × 10⁻⁴ J, dus de kinetische energie neemt met 2 × 10⁻⁴ J toe.']
      },
      practice: [
        {topic:'Coulombkracht',question:'Twee puntladingen +2 µC en −4 µC staan 0,20 m uit elkaar. Hoe groot is hun onderlinge kracht en trekken ze aan of stoten ze af?',choices:['0,18 N, aantrekkend','1,8 N, aantrekkend','1,8 N, afstotend','18 N, aantrekkend'],correct:'B',steps:['Zet om: 2 µC = 2 · 10⁻⁶ C en 4 µC = 4 · 10⁻⁶ C.','F = k · |Q₁Q₂| / r² = (9 · 10⁹)(8 · 10⁻¹²) / 0,20² = 1,8 N.','De ladingen hebben tegengestelde tekens en trekken elkaar dus aan.']},
        {topic:'Velden samenstellen',question:'In één punt is het elektrische veld door bron 1 gelijk aan 300 N/C naar rechts. Bron 2 geeft in datzelfde punt 400 N/C omhoog. Wat is de grootte en richting van het resulterende veld?',choices:['100 N/C naar rechts','500 N/C schuin rechts omhoog','700 N/C schuin rechts omhoog','500 N/C schuin links omlaag'],correct:'B',steps:['Teken de veldpijlen vanuit hetzelfde punt: 300 N/C horizontaal en 400 N/C verticaal.','De pijlen staan loodrecht: E_tot = √(300² + 400²) = 500 N/C.','De sompijl wijst schuin rechts omhoog.']},
        {topic:'Potentiaal en energie',question:'Een lading q = −2 µC gaat van V = 20 V naar V = 70 V. Alleen de elektrische kracht verricht arbeid. Hoe verandert de kinetische energie?',choices:['Ze daalt met 1,0 · 10⁻⁴ J.','Ze stijgt met 1,0 · 10⁻⁴ J.','Ze stijgt met 1,0 · 10⁻³ J.','Ze verandert niet.'],correct:'B',steps:['Het potentiaalverschil is ΔV = 70 − 20 = +50 V.','ΔE_p = q · ΔV = (−2 · 10⁻⁶ C)(50 V) = −1,0 · 10⁻⁴ J.','Omdat alleen de elektrische kracht werkt, is ΔE_k = −ΔE_p = +1,0 · 10⁻⁴ J.']}
      ]
    },
    '3.1': {
      subtitle: 'Herken de stof, volg de ionen en houd bij elke reactie de atomen in balans.',
      guide: 'Het chemieblad bevat fasenotaties en een oplosbaarheidstabel. De balans van atomen en ladingen, en de keuze van de juiste reactiedeeltjes, moet je zelf toepassen.',
      supplied: [
        ['(s) · (l) · (g) · (aq)', 'Vast, vloeibaar, gasvormig en opgelost in water. (aq) is geen vloeibare zuivere stof.'],
        ['NO₃⁻: goed oplosbaar', 'Nitraten staan zonder uitzondering bij de goed oplosbare zouten.'],
        ['Cl⁻: meestal goed oplosbaar', 'Volgens de tabel zijn Ag⁺ en Hg₂²⁺ uitzonderingen.'],
        ['SO₄²⁻: meestal goed oplosbaar', 'Uitzonderingen: Ba²⁺, Pb²⁺, Sr²⁺ en Hg₂²⁺.'],
        ['CO₃²⁻ / PO₄³⁻: meestal slecht oplosbaar', 'Uitzonderingen: zouten van Na⁺, K⁺ en NH₄⁺.']
      ],
      know: [
        ['aantal atomen links = rechts', 'Balanceer met coëfficiënten vóór de formules; verander geen indices.'],
        ['totale lading links = rechts', 'Controleer dit ook bij een essentiële ionenvergelijking.'],
        ['n = c · V', 'Aantal mol uit concentratie en volume; gebruik V in liter. Deze regel staat niet als formule op het chemieblad.'],
        ['n(ion) = index · n(stof)', 'Bijvoorbeeld 1 mol Al₂(SO₄)₃ levert 3 mol SO₄²⁻ als het zout volledig oplost.']
      ],
      stations: {
        '3.1.1': ['Een zuivere stof heeft een vaste chemische identiteit; een mengsel bevat minstens twee stoffen in variabele verhouding. Bij filtreren gebruik je verschil in deeltjesgrootte, bij destilleren kookpuntverschil en bij extractie verschil in oplosbaarheid. De stoffen zelf blijven chemisch dezelfde.', 'Zout water is een homogeen mengsel. Door water te verdampen houd je zout over; NaCl wordt daardoor niet in Na en Cl omgezet.'],
        '3.1.2': ['Een enkelvoudige stof bevat één soort atoom, ook wanneer een molecule uit meerdere van die atomen bestaat. Een samengestelde stof bevat minstens twee elementen. Een elementnaam en een enkelvoudige stof zijn niet precies hetzelfde: zuurstof is een element; O₂ is een enkelvoudige stof.', 'O₃ bevat alleen zuurstofatomen en is enkelvoudig. CO₂ bevat koolstof en zuurstof en is samengesteld.'],
        '3.1.3': ['Een index hoort bij de formule van het deeltje; een coëfficiënt ervoor telt hele deeltjes of mol. In Al₂(SO₄)₃ zijn er 2 Al, 3 S en 12 O per formule-eenheid. Het haakje vermenigvuldigt alle atomen binnen de groep.', '2 Al₂(SO₄)₃ bevat 4 Al-, 6 S- en 24 O-atomen. Verander de index niet wanneer je een reactie balanceert.'],
        '3.1.4': ['Bij ionverbindingen moeten positieve en negatieve ladingen opheffen. Calcium is Ca²⁺ en nitraat NO₃⁻: er zijn twee nitraten nodig, dus Ca(NO₃)₂. Een Romeins cijfer bij sommige metaalnamen geeft de lading van dat metaalion aan.', 'FeCl₃ heet ijzer(III)chloride: drie Cl⁻ vragen één Fe³⁺. FeCl₂ zou ijzer(II)chloride zijn.'],
        '3.1.5': ['Herken stofklassen aan samenstelling: een oxide bevat zuurstof met een ander element; een hydroxide bevat OH⁻; een zuur kan in water H₃O⁺ vormen; een zout bestaat uit kationen en anionen. Stofklassen overlappen soms in reactiebeschrijvingen, dus lees de gehele formule.', 'CaO is een oxide; Ca(OH)₂ is een hydroxide; CaCl₂ is een zout. Deze drie zijn niet uitwisselbaar.'],
        '3.1.6': ['Polair betekent dat elektrische lading in een molecule ongelijk verdeeld is. Water kan ionen omringen en stabiliseren; apolaire oplosmiddelen passen vaak beter bij apolaire moleculen. De vuistregel “soort zoekt soort” is een begin, maar oplosbaarheid hangt ook af van roosterenergie en andere interacties.', 'Keukenzout lost goed in water op; olie vormt een aparte laag. Dat is een verschil in interacties, geen chemische omzetting van de olie.'],
        '3.1.7': ['Een oplossing geleidt pas goed als er voldoende beweeglijke ionen zijn. Een zout kan in gesmolten toestand en, indien oplosbaar, in water geleiden; als vaste stof zitten de ionen in het rooster vast. Een covalente stof kan toch een elektrolyt zijn als ze in water ioniseert.', 'Vast NaCl geleidt slecht, NaCl(aq) wel. Glucose(aq) bevat vooral neutrale moleculen en geleidt daarom nauwelijks.'],
        '3.1.8': ['Gebruik de officiële oplosbaarheidstabel in stappen: identificeer de ionen, zoek de anionrij, controleer uitzonderingen voor het kation. Een slecht oplosbare combinatie kan als (s) neerslaan. Een goed oplosbaar nitraatzout noteer je doorgaans (aq) in water.', 'AgNO₃(aq) met NaCl(aq) vormt AgCl(s) en NaNO₃(aq): chloride met Ag⁺ is een uitzondering.'],
        '3.1.9': ['Bij een reactie worden bindingen verbroken en gevormd, maar de atomen verdwijnen niet. Een synthese vormt een complexer product, analyse ontleedt een stof. Exotherm en endotherm beschrijven energie-uitwisseling; de richting zegt op zich niets over het aantal atomen.', 'Bij 2 H₂ + O₂ → 2 H₂O zijn links en rechts 4 H en 2 O. De coëfficiënt 2 vóór H₂O brengt de balans in orde.'],
        '3.1.10': ['Dissociatie scheidt ionen die in het vaste ionrooster al aanwezig waren; ionisatie maakt ionen door reactie van een covalente stof met water. Schrijf in beide gevallen lading en toestand. Let op hoeveel ionen per formule-eenheid ontstaan.', 'CaCl₂(s) → Ca²⁺(aq) + 2 Cl⁻(aq) is dissociatie. HCl + H₂O → H₃O⁺ + Cl⁻ is ionisatie.'],
        '3.1.11': ['Een neerslagreactie herken je aan een slecht oplosbaar product (s); bij gasontwikkeling verschijnt een gasproduct; bij neutralisatie reageert een zuur met een base; bij redox verandert een oxidatiegetal. Eén reactie kan vanuit meer dan één gezichtspunt beschreven worden.', 'HCl(aq) + NaOH(aq) → NaCl(aq) + H₂O(l) is een zuur-basereactie. De essentiële deeltjes zijn H₃O⁺ en OH⁻.'],
        '3.1.12': ['Schrijf eerst de correcte stoffenvergelijking. Splits daarna goed oplosbare sterke elektrolyten in ionen en schrap ionen die aan beide kanten ongewijzigd voorkomen. Controleer tot slot zowel elk atoom als de totale lading aan weerszijden.', 'AgNO₃(aq) + NaCl(aq) → AgCl(s) + NaNO₃(aq). Schrap Na⁺ en NO₃⁻: Ag⁺(aq) + Cl⁻(aq) → AgCl(s).']
      },
      practice: [
        {topic:'Scheiden van mengsels',question:'Je hebt zand en keukenzout in water. Je wilt zand, zout én water afzonderlijk terugwinnen. Welke volgorde is geschikt?',choices:['Alleen filtreren.','Eerst verdampen, daarna filtreren.','Eerst filtreren, daarna het zoutwater destilleren.','Alleen decanteren.'],correct:'C',steps:['Zand lost niet op: filtreer eerst en vang het zand op het filter op.','Destilleer vervolgens het filtraat: water verdampt en condenseert in een aparte opvangkolf.','Het zout blijft als residu achter in de destillatiekolf. Zo win je alle drie terug.']},
        {topic:'Reactie kloppend maken',question:'Maak Al + O₂ → Al₂O₃ kloppend met de kleinste gehele coëfficiënten. Wat is de som van de coëfficiënten?',choices:['6','7','9','12'],correct:'C',steps:['Kies 2 Al₂O₃: rechts staan dan 4 Al-atomen en 6 O-atomen.','Links heb je daarvoor 4 Al en 3 O₂ nodig: 4 Al + 3 O₂ → 2 Al₂O₃.','De som is 4 + 3 + 2 = 9.']},
        {topic:'Essentiële ionenreactie',question:'Je mengt AgNO₃(aq) en NaCl(aq). Er ontstaat AgCl(s). Welke essentiële ionenreactievergelijking is juist?',choices:['AgNO₃(aq) + NaCl(aq) → AgCl(s) + NaNO₃(aq)','Ag⁺(aq) + Cl⁻(aq) → AgCl(s)','Na⁺(aq) + NO₃⁻(aq) → NaNO₃(s)','Ag⁺(aq) + NO₃⁻(aq) → AgNO₃(s)'],correct:'B',steps:['AgNO₃ en NaCl lossen goed op in water: schrijf hun ionen apart. AgCl is het slecht oplosbare neerslag en blijft als vaste stof staan.','Na⁺ en NO₃⁻ komen aan beide kanten onveranderd voor en zijn dus toeschouwerionen. Schrap ze.','Over blijft Ag⁺(aq) + Cl⁻(aq) → AgCl(s). Links en rechts zijn de atomen en de totale lading in balans.']}
      ]
    }
  };
  for (const subject of window.KIW) for (const chapter of subject.chapters) {
    const focus = chapters[chapter[0]];
    if (!focus) continue;
    for (const station of chapter.stations) {
      const [more, applied] = focus.stations[station.code] || [];
      station.focusMore = more;
      station.focusApplied = applied;
    }
  }
  window.TABIEB_FOCUS = {chapters, urls, openIds: new Set(Object.keys(chapters))};
})();

/* Zelfgetekende, schaalbare schema's: alle beelden werken ook offline. */
(() => {
  const svg=(label,art)=>`<svg class="formula-illustration" viewBox="0 0 320 180" role="img" aria-label="${label}" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="320" height="180" rx="18" fill="#f5f8ff"/>${art}</svg>`;
  const t=(x,y,label,color='#253858',size=16)=>`<text x="${x}" y="${y}" fill="${color}" font-family="Arial, sans-serif" font-size="${size}" font-weight="700">${label}</text>`;
  const line=(x1,y1,x2,y2,color='#5669cf',width=3)=>`<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${width}" stroke-linecap="round"/>`;
  const arrow=(x1,y1,x2,y2,color='#5669cf')=>{
    const angle=Math.atan2(y2-y1,x2-x1), wing=9;
    const a=(x2-wing*Math.cos(angle-.55)).toFixed(1),b=(y2-wing*Math.sin(angle-.55)).toFixed(1);
    const c=(x2-wing*Math.cos(angle+.55)).toFixed(1),d=(y2-wing*Math.sin(angle+.55)).toFixed(1);
    return line(x1,y1,x2,y2,color,3)+`<polygon points="${x2},${y2} ${a},${b} ${c},${d}" fill="${color}"/>`;
  };
  const circle=(x,y,r,fill)=>`<circle cx="${x}" cy="${y}" r="${r}" fill="${fill}"/>`;
  const math=[
    {type:'OP HET BLAD',title:'Tabelwaarden',formula:'log<sub>10</sub>(2) ≈ 0,30 &nbsp; · &nbsp; √2 ≈ 1,41',caption:'De opgegeven getallen zijn een rekenhulp. De algebraïsche regels pas je zelf toe.',svg:svg('Twee getaltegels uit de numerieke tabel',`${t(39,48,'GETALLEN OP HET BLAD','#556783',13)}<rect x="35" y="67" width="111" height="66" rx="13" fill="#e2e9ff"/><rect x="173" y="67" width="111" height="66" rx="13" fill="#dff5ee"/>${t(52,106,'log 2','#4f49b8',22)}${t(188,106,'√2','#167963',22)}${t(47,154,'≈ 0,30','#4f49b8',16)}${t(185,154,'≈ 1,41','#167963',16)}`)},
    {type:'ZELF KENNEN',title:'Tweedegraadsvergelijking',formula:'D = b<sup>2</sup> − 4ac &nbsp; · &nbsp; x = (−b ± √D) / (2a)',caption:'De snijpunten met de x-as zijn de reële oplossingen als D positief is.',svg:svg('Parabool met twee snijpunten op de x-as',`${line(40,145,285,145,'#8794aa',2)}${line(58,159,58,25,'#8794aa',2)}<path d="M75 32 C115 170 165 166 230 35" fill="none" stroke="#5d50cf" stroke-width="4"/>${circle(104,145,6,'#f1864e')}${circle(198,145,6,'#f1864e')}${t(91,168,'x₁','#9e4f2c',14)}${t(188,168,'x₂','#9e4f2c',14)}${t(265,166,'x','#66758e',14)}`)},
    {type:'ZELF KENNEN',title:'Machten',formula:'a<sup>m</sup> · a<sup>n</sup> = a<sup>m+n</sup>',caption:'Bij machten tel je exponenten op als de grondtallen gelijk zijn.',svg:svg('Twee en drie blokken worden samen vijf blokken',`${t(39,49,'a²','#4f49b8',21)}${t(121,49,'×','#61718a',22)}${t(162,49,'a³','#15866c',21)}${t(231,49,'=','#61718a',22)}${t(265,49,'a⁵','#4f49b8',21)}${[0,1].map(i=>`<rect x="${35+i*27}" y="83" width="23" height="30" rx="5" fill="#aca7ef"/>`).join('')}${[0,1,2].map(i=>`<rect x="${132+i*27}" y="83" width="23" height="30" rx="5" fill="#79d5b6"/>`).join('')}${[0,1,2,3,4].map(i=>`<rect x="${238+i*15}" y="83" width="13" height="30" rx="4" fill="#8078db"/>`).join('')}${t(37,148,'2 factoren','#66758e',12)}${t(135,148,'3 factoren','#66758e',12)}${t(246,148,'5 samen','#66758e',12)}`)},
    {type:'ZELF KENNEN',title:'Logaritmen',formula:'log<sub>a</sub>(xy) = log<sub>a</sub>(x) + log<sub>a</sub>(y)',caption:'Een logaritme vraagt: welke exponent op a geeft het getal? Neem a > 0, a ≠ 1 en x,y > 0.',svg:svg('De macht twee tot de derde geeft acht; de omgekeerde vraag logaritme van acht met grondtal twee geeft drie',`${t(51,67,'2³ = 8','#5049b2',29)}${arrow(50,91,271,91,'#6596b1')}${t(52,138,'log₂(8) = 3','#187962',25)}${t(188,57,'omkeren','#5f708b',13)}`)},
    {type:'ZELF KENNEN',title:'Reststelling',formula:'Rest bij P(x) ÷ (x − a) = P(a)',caption:'Vul a in de veelterm in; de hoogte van de grafiek bij x = a geeft P(a).',svg:svg('Grafiek met verticale stippellijn bij a en hoogte P van a',`${line(37,139,284,139,'#8794aa',2)}${line(52,150,52,28,'#8794aa',2)}<path d="M62 113 Q124 28 184 84 T274 43" fill="none" stroke="#5d50cf" stroke-width="4"/><line x1="171" y1="139" x2="171" y2="75" stroke="#ee8c55" stroke-width="2" stroke-dasharray="5 5"/>${circle(171,75,6,'#ee8c55')}${t(165,161,'a','#9e4f2c',15)}${t(181,68,'P(a)','#9e4f2c',15)}`)},
    {type:'ZELF KENNEN',title:'Matrixproduct',formula:'(AB)<sub>ij</sub> = som van (rij i van A) × (kolom j van B)',caption:'Eén vakje van AB ontstaat uit één rij van A en één kolom van B.',svg:svg('Een rij van matrix A maal een kolom van matrix B levert het vakje linksboven van AB',`${t(22,46,'A','#4f49b8',20)}${t(116,46,'B','#16846a',20)}${t(220,46,'AB','#4f49b8',20)}<rect x="22" y="66" width="70" height="62" rx="8" fill="#e3e4fb"/><rect x="116" y="66" width="70" height="62" rx="8" fill="#e2f3ec"/><rect x="222" y="66" width="70" height="62" rx="8" fill="#e3e4fb"/><rect x="24" y="68" width="66" height="28" rx="6" fill="#b5adf5"/><rect x="118" y="68" width="31" height="58" rx="6" fill="#81d5b6"/><rect x="224" y="68" width="31" height="28" rx="6" fill="#f5bc94"/>${t(32,88,'1   2','#29385d',16)}${t(32,119,'3   0','#29385d',16)}${t(125,88,'2   1','#29385d',16)}${t(125,119,'0   4','#29385d',16)}${t(230,88,'2   9','#29385d',16)}${t(230,119,'6   3','#29385d',16)}${arrow(190,97,217,97,'#f08b53')}${t(20,156,'1·2 + 2·0 = 2','#536782',15)}`)}
  ];
  const physics=[
    {type:'OP HET BLAD',title:'Coulombkracht',formula:'F = k · |Q<sub>1</sub>| · |Q<sub>2</sub>| / r<sup>2</sup>',caption:'De afstand r staat in het kwadraat. Verschillende tekens trekken aan.',svg:svg('Twee tegengesteld geladen bollen met krachtpijlen naar elkaar',`${circle(66,89,27,'#f5a26e')}${circle(254,89,27,'#8881dc')}${t(55,98,'+','#fff',28)}${t(244,98,'−','#fff',28)}${arrow(110,88,145,88,'#e47b46')}${arrow(210,88,175,88,'#625ac9')}${line(67,145,254,145,'#8293ac',2)}${line(67,138,67,151,'#8293ac',2)}${line(254,138,254,151,'#8293ac',2)}${t(153,166,'r','#526380',17)}`)},
    {type:'OP HET BLAD',title:'Veld rond een puntlading',formula:'E = k · |Q| / r<sup>2</sup> &nbsp; · &nbsp; V = k · Q / r',caption:'E is de veldsterkte; V is de potentiaal. Bij V behoud je het teken van Q.',svg:svg('Positieve bronlading met radiale veldpijlen en cirkel op afstand r',`<circle cx="160" cy="88" r="52" fill="none" stroke="#b9c7ef" stroke-width="2" stroke-dasharray="5 5"/>${circle(160,88,21,'#ef9460')}${t(150,96,'+','#fff',23)}${[[160,27,160,8],[160,149,160,170],[99,88,76,88],[221,88,244,88],[118,46,101,29],[202,46,219,29],[118,130,101,147],[202,130,219,147]].map(p=>arrow(...p,'#5e68c9')).join('')}${line(162,87,208,87,'#314a7e',2)}${t(181,79,'r','#314a7e',15)}`)},
    {type:'ZELF TOEPASSEN',title:'Kracht en richting',formula:'<b>F</b> = q · <b>E</b> &nbsp; · &nbsp; F = |q| · E (groottes)',caption:'Vetgedrukte F en E zijn vectoren. Bij een negatieve q wijst F tegen E in.',svg:svg('Homogeen veld naar rechts; positieve testlading volgt veld, negatieve lading ondervindt kracht naar links',`${[51,85,119].map(y=>arrow(48,y,270,y,'#8493d8')).join('')}${circle(110,85,17,'#f29d6a')}${t(102,92,'+','#fff',19)}${circle(217,119,17,'#7c75d2')}${t(211,126,'−','#fff',19)}${arrow(124,62,167,62,'#e17a44')}${arrow(203,148,160,148,'#5e55b9')}${t(180,35,'richting E','#4f5f8b',15)}`)},
    {type:'ZELF TOEPASSEN',title:'Velden optellen',formula:'<b>E</b><sub>tot</sub> = <b>E</b><sub>1</sub> + <b>E</b><sub>2</sub>',caption:'Tel pijlen met richting op. Bij loodrechte velden gebruik je Pythagoras.',svg:svg('Veld E1 naar rechts en E2 omhoog; resultante diagonaal rechts omhoog',`${line(64,141,64,36,'#a1aec1',2)}${line(52,141,264,141,'#a1aec1',2)}${arrow(66,139,213,139,'#ee925d')}${arrow(66,139,66,44,'#4cae92')}${arrow(66,139,213,44,'#5754bb')}<line x1="213" y1="139" x2="213" y2="44" stroke="#b4bed1" stroke-width="1.5" stroke-dasharray="5 5"/>${t(155,161,'E1','#a44b25',15)}${t(25,80,'E2','#197c66',15)}${t(154,78,'E tot','#4b45aa',15)}`)},
    {type:'ZELF TOEPASSEN',title:'Potentiaal en energie',formula:'ΔE<sub>p</sub> = q · ΔV &nbsp; · &nbsp; ΔE<sub>k</sub> = −ΔE<sub>p</sub>',caption:'Als alleen de elektrische kracht werkt, wint beweging wat potentiële energie verliest.',svg:svg('Energiebalken tonen dalende potentiële en stijgende kinetische energie',`${t(35,42,'begin','#536681',16)}${t(189,42,'einde','#536681',16)}<rect x="38" y="62" width="105" height="28" rx="7" fill="#756dd2"/><rect x="38" y="106" width="44" height="28" rx="7" fill="#f3a56e"/><rect x="190" y="62" width="44" height="28" rx="7" fill="#756dd2"/><rect x="190" y="106" width="105" height="28" rx="7" fill="#f3a56e"/>${t(43,82,'Ep','#fff',15)}${t(43,126,'Ek','#fff',15)}${t(195,82,'Ep','#fff',15)}${t(195,126,'Ek','#fff',15)}${arrow(152,96,180,96,'#6d79a8')}`)}
  ];
  const chemistry=[
    {type:'OP HET BLAD',title:'Fasenotatie',formula:'(s) vast &nbsp; · &nbsp; (l) vloeibaar &nbsp; · &nbsp; (g) gas &nbsp; · &nbsp; (aq) in water',caption:'(aq) betekent opgelost in water en is niet hetzelfde als zuiver vloeibaar.',svg:svg('Vier vakken met rooster, vloeistofdruppel, losse gasdeeltjes en gehydrateerde ionen',`${[20,96,172,248].map((x,i)=>`<rect x="${x}" y="43" width="55" height="96" rx="10" fill="${['#e7e5fb','#dcf3f0','#e6edfb','#e3f3ff'][i]}"/>`).join('')}${[0,1,2,3].map(i=>t(35+i*76,162,['(s)','(l)','(g)','(aq)'][i],'#405477',15)).join('')}${[0,1,2,3].map(i=>circle(33+i%2*24,70+Math.floor(i/2)*25,6,'#756ecb')).join('')}<path d="M123 66 Q105 91 123 108 Q141 92 123 66" fill="#45b7a4"/>${circle(185,72,5,'#746bcb')}${circle(218,92,5,'#746bcb')}${circle(190,120,5,'#746bcb')}${circle(275,91,10,'#746bcb')}${[0,1,2,3].map(i=>circle(275+[0,18,0,-18][i],91+[-18,0,18,0][i],4,'#55bea8')).join('')}`)},
    {type:'OP HET BLAD',title:'Oplosbaarheid en neerslag',formula:'Ba<sup>2+</sup>(aq) + SO<sub>4</sub><sup>2−</sup>(aq) → BaSO<sub>4</sub>(s)',caption:'Bariumsulfaat is slecht oplosbaar. Gebruik de tabel om uitzonderingen bij sulfaten te herkennen.',svg:svg('Barium- en sulfaationen in water vormen daarna vast bariumsulfaat op de bodem',`<path d="M43 40v85q0 17 15 17h57q15 0 15-17V40" fill="#dbeeff" stroke="#617da6" stroke-width="3"/><path d="M188 40v85q0 17 15 17h57q15 0 15-17V40" fill="#dbeeff" stroke="#617da6" stroke-width="3"/>${circle(68,76,17,'#8176d4')}${t(51,82,'Ba²+','#fff',12)}${circle(105,104,19,'#45ab92')}${t(84,110,'SO₄²−','#fff',12)}${arrow(139,91,176,91,'#6575ad')}<rect x="202" y="121" width="61" height="17" rx="6" fill="#b7b1b0"/>${t(195,115,'BaSO₄(s)','#405168',13)}`)},
    {type:'ZELF KENNEN',title:'Atomen in balans',formula:'2 H<sub>2</sub> + O<sub>2</sub> → 2 H<sub>2</sub>O',caption:'Links en rechts zijn vier H-atomen en twee O-atomen. Verander coëfficiënten, geen indices.',svg:svg('Twee waterstofmoleculen en één zuurstofmolecuul vormen twee watermoleculen',`${[55,94].map(x=>circle(x,70,12,'#8280d9')).join('')}${[55,94].map(x=>circle(x+14,70,12,'#8280d9')).join('')}${circle(153,69,15,'#ed9972')}${circle(173,69,15,'#ed9972')}${arrow(193,74,222,74,'#7180b2')}${[246,282].map(x=>`${circle(x,74,15,'#ed9972')}${circle(x-10,96,10,'#8280d9')}${circle(x+10,96,10,'#8280d9')}`).join('')}${t(55,134,'2 H₂','#514cae',15)}${t(142,134,'O₂','#a75335',15)}${t(243,134,'2 H₂O','#4d628a',15)}`)},
    {type:'ZELF KENNEN',title:'Dissociatie in water',formula:'CaCl<sub>2</sub>(s) → Ca<sup>2+</sup>(aq) + 2 Cl<sup>−</sup>(aq)',caption:'Een ionverbinding valt bij oplossen uiteen in bestaande ionen: per calciumion krijg je twee chloride-ionen.',svg:svg('Eén formule-eenheid calciumchloride valt uiteen in één calciumion en twee chloride-ionen',`<rect x="26" y="53" width="85" height="80" rx="14" fill="#e9e6fa"/>${t(41,100,'CaCl₂','#4b49a8',18)}${arrow(124,93,158,93,'#6578b0')}${circle(206,72,24,'#8177d3')}${t(185,79,'Ca²+','#fff',15)}${circle(187,126,18,'#4ba98e')}${circle(248,126,18,'#4ba98e')}${t(175,132,'Cl−','#fff',13)}${t(236,132,'Cl−','#fff',13)}`)}
  ];
  window.TABIEB_FORMULA_CARDS={'1.1':math,'2.3':physics,'3.1':chemistry};
})();

  return window;
}

const KIW = build();
export default KIW;
