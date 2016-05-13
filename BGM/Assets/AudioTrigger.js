#pragma strict

var victoryClip:AudioClip;
var soundSrc:AudioSource;
var BGM:GameObject;
var bgmSrc:AudioSource;

function Start() {
	soundSrc = GetComponent.<AudioSource>();
	BGM = GameObject.Find("BGM");
	bgmSrc = BGM.GetComponent.<AudioSource>();
}

function OnTriggerEnter(o:Collider) {
	soundSrc.PlayOneShot(victoryClip);
	if (bgmSrc.isPlaying) {
		bgmSrc.Pause();
	}
}

function OnTriggerExit(o:Collider) {
	if (!bgmSrc.isPlaying) {
		bgmSrc.Play();
	}
}