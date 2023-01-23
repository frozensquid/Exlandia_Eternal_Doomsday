var icons={
'Magie':'https://cdn-icons-png.flaticon.com/512/3204/3204021.png',
'Combat':'https://cdn-icons-png.flaticon.com/512/4949/4949538.png',
'Technologie':'https://cdn-icons-png.flaticon.com/512/1087/1087815.png',
'Automatisation':'https://cdn-icons-png.flaticon.com/512/1037/1037503.png',
'Récolte':'https://cdn-icons-png.flaticon.com/512/4310/4310767.png',
'Production':'https://cdn-icons-png.flaticon.com/512/415/415733.png',
'Vanilla':'https://cdn-icons-png.flaticon.com/512/1006/1006555.png',
'Support':'https://cdn-icons-png.flaticon.com/512/3426/3426082.png',
'Utilitaire':'https://cdn-icons-png.flaticon.com/512/1422/1422254.png',
'Transport':'https://cdn-icons-png.flaticon.com/512/2742/2742687.png',
'Défense':'https://cdn-icons-png.flaticon.com/512/4438/4438696.png',
};

 $.each( icons,function (value, i) {
 $("#legend").append('<div class="col-sm-1 "></div><div class="col-sm-3 mt-1" style="border:1px solid black" id="legend_'+value+'" onclick="filter(\''+value+'\')"><p class="card-text text-center">'+value+' <img src="'+i+'" title="'+value+'" style="width:30px;"/></p></div>');
 
 });
function set_icons(name_type){
return icons[name_type];
}
var filter_arr =[]
function filter(name){
	if($("#legend_"+name).hasClass("sign_card_choose")){
		$("#legend_"+name).removeClass("sign_card_choose")
		filter_arr.splice(filter_arr.indexOf(name),1);
	}else{
		$("#legend_"+name).addClass("sign_card_choose")
		filter_arr.push(name)
	}
	
	$('.competence').each(function() {	$(this).show();	}); //on affiche tout par défaut

	$.each(filter_arr, function( index, value ) {//on cache par rapport aux filtres
		$('.competence').each(function() {
		if($(this).hasClass(value) ){
		} else {
			$(this).hide("slow");
		}
		});
	});
	
console.log(filter_arr)
}
/*
function getRemote() {
    c = $.ajax({
        type: "GET",
        url: "https://raw.githubusercontent.com/frozensquid/Exlandia_Eternal_Doomsday/main/competences.js",
        async: false
    }).responseText;
	return c
	
}

content=getRemote();
console.log(content);
*/

 // "Nom compétence":[['Categorie1','Categorie2],'Mini description','Full description','Mods utilisés','Prérequis',[[10,'Desc points'],[15,'explication'],[20,'']]]

 var content={
"Gadget proteiforme":
 [
	 ['Combat','Utilitaire','Récolte','Transport','Technologie'],
	 '→ Actuellement l\'item le plus cher du modpack...',
	 'Cette compétence vous permet d\'utiliser un outil polyvalent créé par le mékanicien. Grâce à des modules, ce gadget peut infliger de lourds dégâts, être efficace à la récolte (comme le minage) ou encore vous permettre de vous téléporter. <b>GRATUIT SI VOUS AVEZ MAÎTRE D\'ARMES TIER 4 ET OUVRIER TIER 4</b>',
	 'Mekanism (https://www.curseforge.com/minecraft/mc-mods/mekanism)',
	 'Aucune',
	 [[50,'']]
 ],
"Crochet dextension":
   [
	   ['Combat',"Récolte", "Technologie","Utilitaire"],
	   '→ VOUS SOUHAITEZ AGRANDIR LA TAILLE DE VOTRE ... euh... portée ?',
	   'Cette compétence vous permet d\'utiliser un bras mécanique vous octroyant plus de portée afin de frapper plus loin ou encore poser des blocs éloignés.',
	   'Create (https://www.curseforge.com/minecraft/mc-mods/create)',
	   'Aucune',
	   [[10,'']]
   ],
   "Docteur":[["Production","Support"],"→ Quoi d'neuf ?","Cette compétence vous permet de créer des bandages, trousses de soin et pommades permettant de soigner en partie vos alliés.",'Rough Tweaks (https://www.curseforge.com/minecraft/mc-mods/rough-tweaks)','Aucune',[[5,'']]],
 "Seigneur des cordes":[["Combat","Vanilla"],"→ Vous avez plus d'un tour dans votre ar... Euh plus d'une corde à votre sac... Enfin vous avez compris...","Cette compétence vous octroie la maîtrise des arcs, arbalètes, frondes et autres objets de lancer (selon le tier choisi).<b>Attention, vous savez manier ce type d'armes mais pas les confectionner. Il vous faut être ou commercer avec un taillandier pour cela.</b>",'Silent Gear (https://www.curseforge.com/minecraft/mc-mods/silent-gear)<br>Upgraded Netherite (https://www.curseforge.com/minecraft/mc-mods/upgraded-netherite)','Vous êtes dépendant du Taillandier',[[10,"Maîtrise jusqu'au fer (non-inclus)"],[15,"Maîtrise jusqu'au diamant (non-inclus)"],[20,"Maîtrise jusqu'à la netherite (non-inclus)"],[35,"Maîtrise jusqu'à la netherite ou plus"]]],
  "Maître darmes":[["Combat","Vanilla"],"→ JE NE MANGE PAS DE GRAINES !!","Cette compétence vous octroie la maîtrise des armes au corps à corps (selon le tier choisi). Attention, vous savez manier ce type d'armes mais pas les confectionner. Il vous faut être ou commercer avec un taillandier pour cela.",'Silent Gear (https://www.curseforge.com/minecraft/mc-mods/silent-gear)<br>Upgraded Netherite (https://www.curseforge.com/minecraft/mc-mods/upgraded-netherite)','Vous êtes dépendant du Taillandier',[[10,"Maîtrise jusqu'au fer (non-inclus)"],[15,"Maîtrise jusqu'au diamant (non-inclus)"],[20,"Maîtrise jusqu'à la netherite (non-inclus)"],[35,"Maîtrise jusqu'à la netherite ou plus"]]],
   "Enchanteur":[["Magie","Utilitaire","Vanilla"],"→ Salut, moi c'est merlin ! Enchanté ! (On est d'accord, c'était pas notre meilleure blague.)","Cette compétence vous permet d'enchanter les armes, outils, armures et objets de vos alliés afin de leur conférer divers effets. De nombreux nouveaux enchantements sont disponibles. Vous avez aussi accès à la table de désenchantement.",'Allurement (https://www.curseforge.com/minecraft/mc-mods/allurement)<br>Additional Ender Items (https://www.curseforge.com/minecraft/mc-mods/additional-ender-items)','aucune',[[20,""]]],
"Eidoloniste":[["Magie","Récolte","Production"],"→ Bonjour, vous avez 5min pour parler des Eidolons ?","Cette compétence vous permet d’organiser des rituels maudits impliquant des esprits afin d’obtenir des bonus pour la colonie ou des équipements.",'Eidolon (https://www.curseforge.com/minecraft/mc-mods/eidolon)<br>Malum (https://www.curseforge.com/minecraft/mc-mods/malum)','aucune',[[25,""]]],
"Mage de sang":[["Utilitaire","Support","Magie","Défense","Production"],"→ Tout est dans le nom : vous êtes peu recommandable.","Cette compétence vous permet d’utiliser le sang comme carburant magique et ainsi créer des rituels à effets variables (repousser les ennemis, infliger des dégâts etc...) ou des stèles individuelles accessibles à tout le monde aux multiples effets. Donne aussi la possibilité de créer de l’équipement.",'Blood Magic (https://www.curseforge.com/minecraft/mc-mods/blood-magic)','aucune',[[45,""]]],
"Botaniste":[["Magie","Utilitaire","Défense","Production","Automatisation"],"→ Par le pouvoir des fleurs !","Cette compétence vous permet d'utiliser la magie de certaines fleurs pour produire du mana et créer des équipements magiques ainsi que des systèmes de défense ou d’automatisation ou bien encore des rituels.",'Botania (https://www.curseforge.com/minecraft/mc-mods/botania)','aucune',[[45,""]]],
"Technologue pétrolier":[["Production","Récolte","Défense","Technologie"],"→ Vous êtes un peu le roi du pétrole. Enfin, vous essayez.","Cette compétence vous permet de créer des machines fonctionnant au pétrole ou à la vapeur afin de créer des équipements ou de produire de l’énergie. Elle vous permet aussi de confectionner de l'équipement pour le lieutenant à vapeur.",'Immersive Engineering (https://www.curseforge.com/minecraft/mc-mods/immersive-engineering)','aucune',[[30,""]]],
"Bricoleur victorien":[["Technologie","Automatisation","Récolte"],"→ Pour faire comme Bob, en mieux sapé.","Cette compétence vous permet  l’élaboration de machines d’automatisation. Le bricoleur utilise des mécanismes afin de créer des rotations et des mouvements dans son environnement de façon totalement autonome. Il peut aussi créer des armures mécaniques ou des jetpacks utiles pour le lieutenant à vapeur.",'Create (https://www.curseforge.com/minecraft/mc-mods/create)','aucune',[[20,""]]],
"Mékanicien":[["Utilitaire","Récolte","Transport","Production","Technologie"],"→ Le 'k' est volontaire. Mais merci d'avoir vérifié.","Cette compétence vous permet la création de mécanismes produisant de l’électricité et l’élaboration de systèmes complexes permettant la création de ressources utiles à la colonie. Vous pouvez aussi armer le Méka-Chevalier.",'Mekanism (https://www.curseforge.com/minecraft/mc-mods/mekanism)','aucune',[[35,""]]],
"Demiurge arcanique":[["Magie","Défense","Production","Automatisation"],"→ Au moins aussi stylé que le nom.","Cette compétence vous permet la création des glyphes (sorts) des différentes classes de mage Ars Nouveau. Vous avez aussi accès à la magie pour créer des défenses et automatiser des actions ainsi que des rituels très variés.",'Ars Nouveau (https://www.curseforge.com/minecraft/mc-mods/ars-nouveau)','aucune',[[10,""],[15,""],[20,""],[35,""]]],
"Invocateur":[["Magie","Combat","Défense"],"→ Ne permet pas d'invoquer vos Waifus.","Cette compétence vous permet d'utiliser les sorts d'invocation de Ars Nouveau. Attention, vous savez les manier mais pas les confectionner. Il vous faut être ou commercer avec un démiurge arcanique pour cela.",'Ars Nouveau (https://www.curseforge.com/minecraft/mc-mods/ars-nouveau)<br>Mowzie\'s Mobs (https://www.curseforge.com/minecraft/mc-mods/mowzies-mobs)','Vous êtes dépendant du Démiurge Arcanique',[[20,""]]],
"Alteromage":[["Magie","Récolte","Transport","Utilitaire"],"→ Pour le soulever de poids : voir Haltéromage. Parce qu'ici la seule chose que vous allez soulever c'est votre mère.","Cette compétence vous permet d'utiliser les sorts ayant la particularité d’altérer l’environnement (faire fondre les minerais, transformer les arbres en charbon, rendre les murs intangibles) de Ars Nouveau. Attention, vous savez les manier mais pas les confectionner. Il vous faut être ou commercer avec un démiurge arcanique pour cela.",'Ars Nouveau (https://www.curseforge.com/minecraft/mc-mods/ars-nouveau)','Vous êtes dépendant du Démiurge Arcanique',[[30,""]]],
"Pommage":[["Magie","Support"],"→ Non, c'est pas de l'anti-rides.","Cette compétence vous permet d'utiliser les sorts de soin de Ars Nouveau. Attention, vous savez les manier mais pas les confectionner. Il vous faut être ou commercer avec un démiurge arcanique pour cela.",'Ars Nouveau (https://www.curseforge.com/minecraft/mc-mods/ars-nouveau)','Vous êtes dépendant du Démiurge Arcanique',[[25,""]]],
"Sorcier":[["Magie","Combat","Support"],"→ Dommage, vous n’irez quand même pas à Poudlard.","Cette compétence vous permet d'utiliser les sorts infligeant des malus de Ars Nouveau. Attention, vous savez les manier mais pas les confectionner. Il vous faut être ou commercer avec un démiurge arcanique pour cela.",'Ars Nouveau (https://www.curseforge.com/minecraft/mc-mods/ars-nouveau)<br>Mowzie\'s Mobs (https://www.curseforge.com/minecraft/mc-mods/mowzies-mobs)','Vous êtes dépendant du Démiurge Arcanique',[[25,""]]],
"Kinesiste":[["Magie","Transport","Support"],"→ Abra! Utilise Téléport! (Abra non-inclus)","Cette compétence vous permet d'utiliser les sorts vous octroyant une meilleure agilité de Ars Nouveau. Attention, vous savez les manier mais pas les confectionner. Il vous faut être ou commercer avec un démiurge arcanique pour cela.",'Ars Nouveau (https://www.curseforge.com/minecraft/mc-mods/ars-nouveau)<br>Mutant Beasts (https://www.curseforge.com/minecraft/mc-mods/mutant-beasts)','Vous êtes dépendant du Démiurge Arcanique',[[20,""]]],
"Damage":[["Magie","Combat"],"→ EMOTIONAL DÂMAGE!","Cette compétence vous permet d'utiliser les sorts de dégâts de Ars Nouveau. Attention, vous savez les manier mais pas les confectionner. Il vous faut être ou commercer avec un démiurge arcanique pour cela.",'Ars Nouveau (https://www.curseforge.com/minecraft/mc-mods/ars-nouveau)','Vous êtes dépendant du Démiurge Arcanique',[[20,""]]],
"Fabricant darmes à feu":[["Production"],"→ Vous avez les compétences, eux, ils ont soif de sang.","Cette compétence vous permet de fabriquer toutes les armes à feu ainsi que les munitions et grenades en passant par un établi particulier.",'Timeless and Classic Guns (https://www.curseforge.com/minecraft/mc-mods/timeless-and-classic-guns)<br>Immersive Engineering (https://www.curseforge.com/minecraft/mc-mods/immersive-engineering)','aucune',[[20,""]]],
"Defourailleur":[["Combat"],"→ Ce n’est pas le titre d’un sketch de Bigard.","Cette compétence vous permet de manier les armes lourdes. Attention, vous savez les manier mais pas les confectionner. Il vous faut être ou commercer avec un fabricant d'armes à feu pour cela.",'Timeless and Classic Guns (https://www.curseforge.com/minecraft/mc-mods/timeless-and-classic-guns)<br>Immersive Engineering (https://www.curseforge.com/minecraft/mc-mods/immersive-engineering)','Vous êtes dépendant du Fabricant d\'armes à feu',[[30,""]]],
"Cracheur de shrapnel":[["Combat"],"→ Va falloir mettre des cartouches autre part que dans Jaqueline.","Cette compétence vous permet de manier les fusils à pompe. Attention, vous savez les manier mais pas les confectionner. Il vous faut être ou commercer avec un fabricant d'armes à feu pour cela.",'Timeless and Classic Guns (https://www.curseforge.com/minecraft/mc-mods/timeless-and-classic-guns)','Vous êtes dépendant du Fabricant d`\'armes à feu',[[30,""]]],
"Tireur d elite":[["Combat"],"→ S'agirait de savoir viser.","Cette compétence vous permet de manier les fusils de précision. Attention, vous savez les manier mais pas les confectionner. Il vous faut être ou commercer avec un fabricant d'armes à feu pour cela.",'Timeless and Classic Guns (https://www.curseforge.com/minecraft/mc-mods/timeless-and-classic-guns)','Vous êtes dépendant du Fabricant d\'armes à feu',[[25,""]]],
"Gros calibre":[["Combat"],"→ Léa passion Kalashnikov","Cette compétence vous permet de manier des fusils d'assaut. Attention, vous savez les manier mais pas les confectionner. Il vous faut être ou commercer avec un fabricant d'armes à feu pour cela.",'Timeless and Classic Guns (https://www.curseforge.com/minecraft/mc-mods/timeless-and-classic-guns)','Vous êtes dépendant du Fabricant d\'armes à feu',[[25,""]]],
"Petit calibre":[["Combat"],"→ RATATATATATA","Cette compétence vous permet de manier des SMGs. Attention, vous savez les manier mais pas les confectionner. Il vous faut être ou commercer avec un fabricant d'armes à feu pour cela.",'Timeless and Classic Guns (https://www.curseforge.com/minecraft/mc-mods/timeless-and-classic-guns)','Vous êtes dépendant du Fabricant d\'armes à feu',[[20,""]]],
"Pistolero":[["Combat"],"→ Pas la peine de chercher, vous ne tirerez jamais plus vite que votre ombre.","Cette compétence vous permet de manier des armes de poing. Attention, vous savez les manier mais pas les confectionner. Il vous faut être ou commercer avec un fabricant d'armes à feu pour cela.",'Timeless and Classic Guns (https://www.curseforge.com/minecraft/mc-mods/timeless-and-classic-guns)<br>Immersive Engineering (https://www.curseforge.com/minecraft/mc-mods/immersive-engineering)','Vous êtes dépendant du Fabricant d\'armes à feu',[[15,""]]],
"Artificier":[["Combat","Défense","Production"],"→ Le meilleur ami des Creepers.","Cette compétence vous permet la création de mécanismes, engins ou armes explosives ainsi que leur utilisation.",'Security Craft (https://www.curseforge.com/minecraft/mc-mods/security-craft)<br>Timeless and Classic Guns (https://www.curseforge.com/minecraft/mc-mods/timeless-and-classic-guns)','aucune',[[15,""]]],"Orfèvre":[["Production","Vanilla"],"→ On vous voit avec vos contrefaçons de Rolex, mais on ne juge pas.","Cette compétence vous donne l’accès aux recettes des appareils de mesure (comme l’horloge, la boussole ou encore le thermomètre) ainsi qu’aux recettes de bijoux (anneaux, bracelets, pendentifs).",'Aucun','aucune',[[10,""]]],
"Raffineur":[["Production","Utilitaire"],"→ Raffineur peut-être, mais certainement pas raffiné.","Cette compétence permet l’amélioration des armes, armures et outils en augmentant leurs statistiques.",'Silent Gear (https://www.curseforge.com/minecraft/mc-mods/silent-gear)<br>Anointed Items (https://www.curseforge.com/minecraft/mc-mods/anointed-items)','aucune',[[15,""]]],
"Armurier":[["Production","Vanilla"],"→ La Cristina Cordula des chevaliers.","Vous êtes capable de forger n'importe quelle armure mais pas de la porter. Vous avez accès à l'enclume.",'Silent Gear (https://www.curseforge.com/minecraft/mc-mods/silent-gear)<br>Upgraded Netherite (https://www.curseforge.com/minecraft/mc-mods/upgraded-netherite)','aucune',[[15,""]]],
"Ferronnier":[["Production","Vanilla"],"→ Les bouseux vous remercient.","Vous êtes capable de forger n'importe quel outil non-magique mais pas de le manier. Vous avez accès à l'enclume.",'Silent Gear (https://www.curseforge.com/minecraft/mc-mods/silent-gear)<br>Upgraded Netherite (https://www.curseforge.com/minecraft/mc-mods/upgraded-netherite)','aucune',[[15,""]]],
"Taillandier":[["Production","Vanilla"],"→ A ne pas confondre avec les taille-endives.","Vous êtes capable de forger n'importe quelle arme non-magique mais pas de la manier. Vous avez accès à l'enclume.",'Silent Gear (https://www.curseforge.com/minecraft/mc-mods/silent-gear)<br>Upgraded Netherite (https://www.curseforge.com/minecraft/mc-mods/upgraded-netherite)','aucune',[[15,""]]],
"Tank":[["Combat","Vanilla"],"→ N.B. : Ne protège pas des colibets.","Cette compétence vous octroie la possibilité de porter des armures (selon le tier choisi). Attention, vous savez les porter mais pas les confectionner. Il vous faut être ou commercer avec un armurier, un mékanicien, un bricoleur victorien ou encore un mage de sang pour cela.",'Silent Gear (https://www.curseforge.com/minecraft/mc-mods/silent-gear)<br>Upgraded Netherite (https://www.curseforge.com/minecraft/mc-mods/upgraded-netherite)<br> Et autres armures de divers mods','Vous êtes dépendant de l\'Armurier',[[15,"Maîtrise jusqu'au diamant (non-inclus)"],[25,"Maîtrise jusqu'à la netherite (non-inclus)"],[35,"Maîtrise jusqu'à la netherite et plus"]]],
"Bouseux":[["Vanilla","Récolte"],"→ On dirait pas mais on vous aime quand même ♥","Cette compétence vous octroie la maîtrise des houes et des faux (selon le tier choisi). Attention, vous savez les manier mais pas les confectionner. Il vous faut être ou commercer avec un ferronnier pour cela.",'Silent Gear (https://www.curseforge.com/minecraft/mc-mods/silent-gear)<br>Upgraded Netherite (https://www.curseforge.com/minecraft/mc-mods/upgraded-netherite)','Vous êtes dépendant du Ferronnier',[[5,"Maîtrise jusqu'au netherite (non-inclus)"],[20,"Maîtrise jusqu'au netherite ou plus"]]],
"Mineur":[["Vanilla","Récolte"],"→ On est dans Minecraft, vous vous attendiez à quoi ?","Cette compétence vous octroie la maîtrise des pioches, des marteaux et des marteaux de prospecteur (selon le tier choisi). Le marteau de prospecteur vous permet de miner mais aussi de sonder un bloc afin de savoir si un minerai se cache derrière. Attention, vous savez les manier mais pas les confectionner. Il vous faut être ou commercer avec un ferronnier pour cela.",'Silent Gear (https://www.curseforge.com/minecraft/mc-mods/silent-gear)<br>Upgraded Netherite (https://www.curseforge.com/minecraft/mc-mods/upgraded-netherite)','Vous êtes dépendant du Ferronnier',[[10,"Maîtrise jusqu'au fer (non-inclus)"],[15,"Maîtrise jusqu'au diamant (non-inclus)"],[20,"Maîtrise jusqu'à la netherite (non-inclus)"],[35,"Maîtrise jusqu'à la netherite ou plus"]]],
"Ouvrier":[["Vanilla","Récolte"],"→ Nous non plus on savait pas ce qu'était un mattock. Google est votre ami.","Cette compétence vous octroie la maîtrise des mattocks et des paxels, outils qui vous permettent d'effectuer de multiples tâches comme creuser, miner et couper du bois mais moins efficacement que les outils spécialisés (selon le tier choisi)Attention, vous savez les manier mais pas les confectionner. Il vous faut être ou commercer avec un ferronnier pour cela.",'Silent Gear (https://www.curseforge.com/minecraft/mc-mods/silent-gear)','Vous êtes dépendant du Ferronnier',[[10,"Maîtrise jusqu\'au fer (non-inclus)"],[15,"Maîtrise jusqu\'au diamant (non-inclus)"],[20,"Maîtrise jusqu\'à la netherite (non-inclus)"],[35,"Maîtrise jusqu\'à la netherite ou plus"]]],
"Croque Mort":[["Vanilla","Récolte"],"→ Si vous le voulez, vous pouvez utiliser votre pelle autrement que pour enterrer des gens.","Cette compétence vous octroie la maîtrise des pelles et des excavateurs (selon le tier choisi).Attention, vous savez les manier mais pas les confectionner. Il vous faut être ou commercer avec un ferronnier pour cela.",'Silent Gear (https://www.curseforge.com/minecraft/mc-mods/silent-gear)<br>Upgraded Netherite (https://www.curseforge.com/minecraft/mc-mods/upgraded-netherite)','Vous êtes dépendant du Ferronnier',[[5,"Maîtrise jusqu\'au diamant (non-inclus)"],[15,"Maîtrise jusqu\'à la netherite (non-inclus)"],[35,"Maîtrise jusqu\'à la netherite ou plus"]]],
"Bucheron":[["Combat","Récolte","Vanilla"],"→ 'Here's Johnny!'","Cette compétence vous octroie la maîtrise des haches et des scies (selon le tier choisi).Attention, vous savez les manier mais pas les confectionner. Il vous faut être ou commercer avec un ferronnier pour cela.",'Silent Gear (https://www.curseforge.com/minecraft/mc-mods/silent-gear)<br>Upgraded Netherite (https://www.curseforge.com/minecraft/mc-mods/upgraded-netherite)','Vous êtes dépendant du Ferronnier',[[10,"Maîtrise jusqu'au fer (non-inclus)"],[15,"Maîtrise jusqu'au diamant (non-inclus)"],[20,"Maîtrise jusqu'à la netherite (non-inclus)"],[35,"Maîtrise jusqu'à la netherite ou plus"]]],
"Hypaspiste":[["Vanilla","Combat"],"→ Un nom très compliqué pour désigner un mec avec un bouclier.","Cette compétence vous octroie la maîtrise des boucliers (selon le tier choisi). Attention, vous savez les manier mais pas les confectionner. Il vous faut être ou commercer avec un armurier pour cela.",'Silent Gear (https://www.curseforge.com/minecraft/mc-mods/silent-gear)<br>Upgraded Netherite (https://www.curseforge.com/minecraft/mc-mods/upgraded-netherite)','Vous êtes dépendant de l\'Armurier',[[10,"Boucliers sans effets"],[15,"Boucliers avec effets"]]],
"Responsable de la sécurité":[["Défense","Technologie"],"→ C'est sûr. C'est Verisure.","Vous avez les connaissances pour mettre en place des systèmes de défense avancés tels que des portes à codes, des scanners rétiniens ou des pièges.",'Security Craft (https://www.curseforge.com/minecraft/mc-mods/security-craft)','aucune',[[15,""]]],
"Ingenieur basique":[["Technologie","Automatisation","Vanilla"],"→ Si on était en 2011, on ferait une blague sur Aypierre qui sniffe de la redstone.","Cette compétence vous donne accès aux recettes basées sur la redstone ainsi qu'à son utilisation. Les systèmes sont dorénavant constructibles dans l'eau.<b>Cette compétence est gratuite à partir du moment où une autre compétence dite 'technologique' est prise</b>",'Waterlogged Redstone (https://www.curseforge.com/minecraft/mc-mods/waterlogged-redstone)<br>Supplementaries (https://www.curseforge.com/minecraft/mc-mods/supplementaries)','aucune',[[5,""]]],
"Charpentier":[["Production","Utilitaire","Transport","Vanilla"],"→ Le saviez-vous? : le charpentier construit aussi des bateaux.","Vous êtes en mesure de construire bateaux, wagons, rails et autres moyens de locomotion. Vous confectionnez aussi des charrettes ou des machines de labourage.",'Useful Railroads (https://www.curseforge.com/minecraft/mc-mods/useful-railroads)<br>AstikorCarts [Horse Carts] (https://www.curseforge.com/minecraft/mc-mods/astikorcarts)<br>Boatload (https://www.curseforge.com/minecraft/mc-mods/boatload)','aucune',[[5,""]]],
"Maitre dimensionnel":[["Production","Transport","Utilitaire"],"→ Une espèce de Kangourou bizarre.","Cette compétence vous permet de manipuler les dimensions afin de créer des stockages auxquels seuls vous aurez accès, des portails de téléportation ainsi que de nombreux objets magiques relatif au vide.",'Téléportation de Ars Nouveau (https://www.curseforge.com/minecraft/mc-mods/ars-nouveau)<br>Additional Ender Items (https://www.curseforge.com/minecraft/mc-mods/additional-ender-items)<br>Pandoras Creatures (https://www.curseforge.com/minecraft/mc-mods/pandoras-creatures)','aucune',[[10,""]]],
"Archiveur numerique":[["Technologie","Utilitaire","Automatisation"],"→ Une dame du CDI en beaucoup plus cool.","Vos connaissances technologiques vous octroient la capacité de créer des stockages infinis possédant d'autres particularités utiles afin de vous faire gagner beaucoup de temps au quotidien. ",'Refined Storage (https://www.curseforge.com/minecraft/mc-mods/refined-storage)<br>Refined Storage: Requestify (https://www.curseforge.com/minecraft/mc-mods/rs-requestify)<br>Refined Storage Addons (https://www.curseforge.com/minecraft/mc-mods/refined-storage-addons)','aucune',[[10,""]]],
"Druide":[["Magie","Production","Utilitaire"],"→ Vous serez super fort, mais jamais pris au sérieux, demandez à Victor","Cette compétence vous donne accès à un savoir runique sylvain. Elle vous permet d'effectuer des rituels invoquant des armes, des piliers protecteurs ou des bâtons de mage puissants. Vous savez manier des sceptres infusés de magie sylvestre offrant de multiples pouvoirs. Vous n'êtes cependant pas en mesure de maîtriser les armes et armures que vous créez sans compétence associée.",'Roots Classic (https://www.curseforge.com/minecraft/mc-mods/roots-classic)<br>Rough Tweaks Revamped (https://www.curseforge.com/minecraft/mc-mods/rough-tweaks-revamped)','aucune',[[15,""]]],
"Tanneur":[["Production","Utilitaire"],"→ Désolé, l’alternative végétale n’est pas disponible","Vous manipulez le cuir comme personne. Vous êtes le seul à pouvoir confectionner la majorité des recettes à base de cuir. Cette compétence se révèle indispensable afin de réguler la température d'une colonie. Vous êtes aussi capable de fournir des sacs à dos permettant à quiconque de transporter bien plus d'objets sur lui.",'Cold Sweat (https://www.curseforge.com/minecraft/mc-mods/cold-sweat)<br>Sophisticated Backpacks (https://www.curseforge.com/minecraft/mc-mods/sophisticated-backpacks)','aucune',[[15,""]]],
"Alchimiste":[["Support","Production"],"→ Frappe-moi, je t'empoisonne.","Vous maîtrisez la concoction de potions en tout genre. Vous pouvez utiliser les outils Vanilla de Minecraft mais aussi l'alchimie apportée par d'autres mods.",'Branche alchimie de Ars Nouveau (https://www.curseforge.com/minecraft/mc-mods/ars-nouveau)<br>Branche alchimie de Blood Magic (https://www.curseforge.com/minecraft/mc-mods/blood-magic)<br>Branche alchimie de Eidolon (https://www.curseforge.com/minecraft/mc-mods/eidolon)<br>Branche alchimie de Botania (https://www.curseforge.com/minecraft/mc-mods/botania)','Pour exploiter vos talents au maximum, la compétence Démiurge Arcanique, Mage de sang, Eidoloniste et Botaniste peut être nécessaire.',[[20,""]]],
"Apiculteur":[["Vanilla","Production"],"→ Pour une fois ce sera pas à vous qu'on pompera le dard","Vous êtes en mesure de confectionner des ruches et de récolter le miel produit par les abeilles. Cette compétence vous donner accès à des crafts supplémentaires liés au miel.",'Buzzier Bees (https://www.curseforge.com/minecraft/mc-mods/buzzier-bees)','aucune',[[5,""]]],
"Morutier":[["Production","Vanilla"],"→ Contrairement à ce que ça laisse penser, vous n'êtes pas le descendant d'une morue.","Cette compétence vous octroie la possibilité de façonner vos propres cannes à pêches et de les utiliser. ",'Pas de mod particulier associé.','aucune',[[5,""]]],
"Fermier":[["Production","Vanilla"],"→ Avec vous c'est l'Amour est dans le Pré, mais sans l'amour.","Vous êtes responsable de l'agriculture et de l'élevage. Cette compétence vous permet de nourrir les animaux afin qu'ils se reproduisent ainsi que de planter toutes les graines présentes dans le jeu. Vous avez accès à la houe en bois.",'Genetic Animals (https://www.curseforge.com/minecraft/mc-mods/genetic-animals)','aucune',[[25,""]]],
"Chef cuisinier":[["Vanilla","Production"],"→ Vous êtes un peu le Philippe Etchebest de la colonie, mais en plus sympa.","Véritable cordon bleu, vous êtes seul détenteur d'un savoir ancestral culinaire vous permettant de faire toutes les recettes disponibles dans ce monde. Chaque équipe devra compter sur vous afin de s'alimenter surtout sur une île aussi hostile que celle sur laquelle vous allez atterrir. Vous savez utiliser le couteau de silex.",'Farmer\'s Delight (https://www.curseforge.com/minecraft/mc-mods/farmers-delight)<br>Tous les add-ons Delight','Vous êtes dépendant du Fermier',[[20,""]]],
 };
 console.log(typeof content)

 $.each( content,function (value, i) {
 var img_ht=""
 var class_cpt=""
 $.each( i[0],function (v, k) {
 img_ht=img_ht+'<img src="'+set_icons(k)+'" title="'+k+'" style="width:30px">'
 class_cpt=class_cpt+" "+k
 });
 value_s=value.replace(/ /g, '_')
    $("#all_cptc").append('<div class="card col-sm-3 me-1 mt-1 ms-1 text-center competence sign_card '+class_cpt+'" style="cursor:pointer"  > <p class="card-text " > <div class="row" style="padding-right:15px;" id="'+value_s+'"> <div class="col-sm-8 " >'+
	'<span class="competence_name">'+value+'</span> <br>'+img_ht+' </div> <div class="col-sm-4 noclick" style="border:1px solid black;" >'+
	'<img src="https://static.wikia.nocookie.net/minecraft_gamepedia/images/5/5e/Experience_Orb_Value_149-306.png" style="width:20px;"/> '+
	'<span id="actual_level_'+value.replace(/ /g, '_')+'">0</span> / '+i[5].length+' <br> <i class="fa fa-angle-up" aria-hidden="true" style="cursor:pointer" onclick="add_remove(\''+value.replace(/ /g, '_')+'\',\'up\')"></i>'+
	'<i class="fa fa-angle-down" aria-hidden="true" style="cursor:pointer" onclick="add_remove(\''+value+'\',\'down\')"></i> </div> </div> </p> </div>')
});

//var new_count=100;
var choosen=[]

function add_remove(name,action){
	var new_count=parseInt($("#points_restant").html())
	var actual_level=parseInt($('#actual_level_'+name.replace(/ /g, '_')).html());
	var cout=content[name.replace(/_/g, ' ')][5][0][0];
	var max_level=content[name.replace(/_/g, ' ')][5].length
	if(action == "up") {
		new_level=actual_level+1
		if(new_level <= max_level){
			new_count=new_count-parseInt(content[name.replace(/_/g, ' ')][5][actual_level][0]);
		} else { alert('niveau max atteint');return}
	} else { //Si on enléve un niveau à la compétence
		new_level=actual_level-1
		if(new_level >= 0){
		

			new_count=new_count+parseInt(content[name.replace(/_/g,' ')][5][parseInt(new_level)][0]);
		} else {
			alert('niveau min atteint');return;
		}
	}

	console.log("new level : "+new_level)
	console.log("new count  : "+new_count)
	
	if(new_count < 0){
		alert('Pas assez de points ('+new_count+') ou deja pris'); return;
	}
	$('#all_choose').html(" ")
		if(new_level > 0){
			console.log(name)
			$("#"+name).parent().addClass("sign_card_choose")
		}
		if(new_level == 0){
			console.log(name.replace(/ /g, '_'))
			$("#"+name.replace(/ /g, '_')).parent().removeClass("sign_card_choose")
		}
		
	//Si on arrive la c'est qu'on est bon :)
	$("#points_restant").html(new_count)
	$('#actual_level_'+name.replace(/ /g, '_')).html(new_level)

	choosen[name]=new_level
	
for (const [key, value] of Object.entries(choosen)) {
	if(new_level > 0){
		$('#all_choose').append(""+key.replace(/_/g, ' ')+" : NV"+value+"<br>")
		val recap=$("#recap_competence").val()
		$("#recap_competence").val(recap+key.replace(/_/g, ' ')+" : NV"+value)

	}
	}

}


$( ".competence" ).click(function() {


 $("#card_desc_global").hide();
 $("#card_desc_global").show( "slow" );
  var name=$(".competence_name",this).html()
  $("#card-title_cpt").html(name)
  $("#type_cptc").html( content[name][0].join(", "))
  $("#minidesc").html( content[name][1])
  $("#description_cptc").html( content[name][2])
  $("#mods").html( content[name][3])
  $("#fonctionneavec").html( content[name][4])
  $("#couts").html(" ")
   content[name][5].forEach(function (value, i) {
		nv=i+1;
		$("#couts").append('nv'+nv+' : '+ value[0]+"Pts ("+value[1]+")<br>");
	});
$('#exampleModal').modal('toggle')
});

$( ".noclick" ).click(function() {return false;});
