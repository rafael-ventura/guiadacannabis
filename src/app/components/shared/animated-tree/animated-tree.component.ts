import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as THREE from 'three';

@Component({
  selector: 'app-animated-tree',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './animated-tree.component.html',
  styleUrl: './animated-tree.component.scss'
})
export class AnimatedTreeComponent implements OnInit, OnDestroy {
  @ViewChild('treeContainer', { static: true }) treeContainer!: ElementRef;

  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private animationId!: number;
  private leaves: THREE.Mesh[] = [];
  private windStrength = 0.5;
  private time = 0;

  ngOnInit(): void {
    this.initThreeJS();
    this.createTree();
    this.animate();
  }

  ngOnDestroy(): void {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
    if (this.renderer) {
      this.renderer.dispose();
    }
  }

  private initThreeJS(): void {
    const container = this.treeContainer.nativeElement;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xf0f8ff);

    // Camera
    this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    this.camera.position.set(0, 0, 5);

    // Renderer
    this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    this.renderer.setSize(width, height);
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(this.renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    this.scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(10, 10, 5);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    this.scene.add(directionalLight);
  }

  private createTree(): void {
    // Tronco
    const trunkGeometry = new THREE.CylinderGeometry(0.1, 0.2, 2, 8);
    const trunkMaterial = new THREE.MeshLambertMaterial({ color: 0x8B4513 });
    const trunk = new THREE.Mesh(trunkGeometry, trunkMaterial);
    trunk.position.y = -1;
    trunk.castShadow = true;
    this.scene.add(trunk);

    // Folhas de cannabis
    this.createCannabisLeaves();
  }

  private createCannabisLeaves(): void {
    const leafCount = 25; // Mais folhas para parecer mais realista
    const leafPositions = this.generateLeafPositions(leafCount);

    leafPositions.forEach((position, index) => {
      const leaf = this.createSingleLeaf();
      leaf.position.set(position.x, position.y, position.z);
      leaf.rotation.set(position.rotX, position.rotY, position.rotZ);

      // Escala variada para folhas
      const scale = 0.6 + Math.random() * 0.8;
      leaf.scale.set(scale, scale, scale);

      leaf.userData = {
        originalPosition: position,
        windOffset: Math.random() * Math.PI * 2,
        swaySpeed: 0.3 + Math.random() * 0.7,
        scale: scale
      };

      this.leaves.push(leaf);
      this.scene.add(leaf);
    });
  }

  private createSingleLeaf(): THREE.Mesh {
    // Geometria da folha de cannabis (forma mais realista com 7 folíolos)
    const leafShape = new THREE.Shape();

    // Folíolo central
    leafShape.moveTo(0, 0);
    leafShape.quadraticCurveTo(0.2, 0.1, 0.4, 0);
    leafShape.quadraticCurveTo(0.6, 0.1, 0.8, 0.2);
    leafShape.quadraticCurveTo(0.9, 0.3, 0.7, 0.4);
    leafShape.quadraticCurveTo(0.5, 0.5, 0.3, 0.4);
    leafShape.quadraticCurveTo(0.1, 0.3, 0, 0.2);
    leafShape.quadraticCurveTo(-0.1, 0.1, 0, 0);

    // Adicionar folíolos laterais
    const leftLeaf = new THREE.Shape();
    leftLeaf.moveTo(-0.1, 0.1);
    leftLeaf.quadraticCurveTo(-0.3, 0.2, -0.4, 0.1);
    leftLeaf.quadraticCurveTo(-0.5, 0.3, -0.3, 0.4);
    leftLeaf.quadraticCurveTo(-0.1, 0.5, 0, 0.3);
    leftLeaf.quadraticCurveTo(0.1, 0.2, -0.1, 0.1);

    const rightLeaf = new THREE.Shape();
    rightLeaf.moveTo(0.9, 0.1);
    rightLeaf.quadraticCurveTo(1.1, 0.2, 1.2, 0.1);
    rightLeaf.quadraticCurveTo(1.3, 0.3, 1.1, 0.4);
    rightLeaf.quadraticCurveTo(0.9, 0.5, 0.8, 0.3);
    rightLeaf.quadraticCurveTo(0.7, 0.2, 0.9, 0.1);

    const leafGeometry = new THREE.ExtrudeGeometry(leafShape, {
      depth: 0.01,
      bevelEnabled: true,
      bevelThickness: 0.005,
      bevelSize: 0.005,
      bevelOffset: 0,
      bevelSegments: 1
    });

    const leafMaterial = new THREE.MeshLambertMaterial({
      color: 0x2E7D32, // Verde mais escuro e realista
      transparent: true,
      opacity: 0.9
    });

    const leaf = new THREE.Mesh(leafGeometry, leafMaterial);
    leaf.castShadow = true;
    leaf.receiveShadow = true;

    return leaf;
  }

  private generateLeafPositions(count: number): any[] {
    const positions = [];

    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const radius = 0.3 + Math.random() * 0.4;
      const height = Math.random() * 1.5 + 0.5;

      positions.push({
        x: Math.cos(angle) * radius,
        y: height,
        z: Math.sin(angle) * radius,
        rotX: (Math.random() - 0.5) * 0.5,
        rotY: angle + (Math.random() - 0.5) * 0.5,
        rotZ: (Math.random() - 0.5) * 0.3
      });
    }

    return positions;
  }

  private animate(): void {
    this.time += 0.016; // ~60fps

    // Animar folhas com movimento de vento mais realista
    this.leaves.forEach((leaf, index) => {
      const userData = leaf.userData;

      // Múltiplas frequências para movimento mais natural
      const windEffect1 = Math.sin(this.time * userData.swaySpeed + userData.windOffset) * this.windStrength;
      const windEffect2 = Math.sin(this.time * userData.swaySpeed * 1.5 + userData.windOffset) * this.windStrength * 0.5;
      const swayEffect = Math.sin(this.time * 0.3 + userData.windOffset) * 0.15;
      const flutterEffect = Math.sin(this.time * 2 + userData.windOffset) * 0.05;

      // Movimento de balanço mais complexo
      leaf.rotation.z = userData.originalPosition.rotZ + (windEffect1 + windEffect2) * 0.4;
      leaf.rotation.x = userData.originalPosition.rotX + swayEffect + flutterEffect;
      leaf.rotation.y = userData.originalPosition.rotY + Math.sin(this.time * 0.2 + userData.windOffset) * 0.1;

      // Movimento vertical mais orgânico
      leaf.position.y = userData.originalPosition.y +
        Math.sin(this.time * 0.2 + userData.windOffset) * 0.08 +
        Math.sin(this.time * 0.8 + userData.windOffset) * 0.03;

      // Movimento horizontal circular
      const radius = 0.02 + Math.sin(this.time * 0.1 + userData.windOffset) * 0.01;
      leaf.position.x = userData.originalPosition.x +
        Math.sin(this.time * 0.3 + userData.windOffset) * radius;
      leaf.position.z = userData.originalPosition.z +
        Math.cos(this.time * 0.3 + userData.windOffset) * radius;

      // Pulsação sutil da escala
      const scaleVariation = 1 + Math.sin(this.time * 0.5 + userData.windOffset) * 0.02;
      leaf.scale.set(
        userData.scale * scaleVariation,
        userData.scale * scaleVariation,
        userData.scale * scaleVariation
      );
    });

    // Rotação suave da câmera em órbita
    const radius = 5;
    this.camera.position.x = Math.sin(this.time * 0.05) * radius;
    this.camera.position.z = Math.cos(this.time * 0.05) * radius;
    this.camera.position.y = 2 + Math.sin(this.time * 0.03) * 0.5;
    this.camera.lookAt(0, 1, 0);

    this.renderer.render(this.scene, this.camera);
    this.animationId = requestAnimationFrame(() => this.animate());
  }

  onResize(): void {
    const container = this.treeContainer.nativeElement;
    const width = container.clientWidth;
    const height = container.clientHeight;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }
}
