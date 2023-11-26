<script>
  import { SkinViewer, WalkingAnimation, FlyingAnimation, IdleAnimation, RunningAnimation } from "skinview3d";
  import { onMount } from "svelte";


  export let skin="/skinview3d/black_rock.png"
  export let nameTag = "Black Rock"
  export let background = "/webpromo/skyworld.png"
  export let panorama = "/skinview3d/panorama.png"
  export let animation = "idle"
  export let cape = "/skinview3d/migrator_cape.png"

onMount(()=>{

	let skinViewer = new SkinViewer({
		canvas: document.getElementById("skin_container"),
		width: 480,
		height: 480,
		skin: skin,
	});

	// // Change viewer size
	// skinViewer.width = 600;
	// skinViewer.height = 800;
  skinViewer.nameTag = nameTag;
	// // Load another skin
	// skinViewer.loadSkin("/skinview3d/black_rock.png");

	// // Load a cape
	skinViewer.loadCape(cape);

	// // Load an elytra (from a cape texture)
	// skinViewer.loadCape("/skinview3d/migrator_cape.png", { backEquipment: "elytra" });

	// // Unload(hide) the cape / elytra
	// skinViewer.loadCape(null);

	// // Set the background color
	// skinViewer.background = 0x5a76f3;

	// // Set the background to a normal image
	// skinViewer.background(background);

	// // Set the background to a panoramic image
	skinViewer.loadPanorama(panorama);

	// // Change camera FOV
	skinViewer.fov = 70;

	// // Zoom out
	skinViewer.zoom = 0.7;

	// // Rotate the player
	// skinViewer.autoRotate = rotate;

  if (animation == "idle") {
  skinViewer.animation = new IdleAnimation();
  } else if (animation == "walking") {
  skinViewer.animation = new WalkingAnimation();
  } else if (animation == "running") {
  skinViewer.animation = new RunningAnimation();
  } else if (animation == "flying") {
  skinViewer.animation = new FlyingAnimation();
  }

  skinViewer.animation.speed = 0.75;
	// // Apply an animation
  // if (walking) {
  	// skinViewer.animation = new WalkingAnimation();
  	// skinViewer.animation = new FlyingAnimation();

    // // Pause the animation
    // skinViewer.animation.paused = true;

    // // Set the speed of the animation
    // skinViewer.animation.speed = 0.75;

  // }


	// // Remove the animation
	// skinViewer.animation = null;
})

</script>

<canvas id="skin_container" class="aspect-square bg-white object-fit"></canvas>
