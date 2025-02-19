var APP_DATA = {
  "scenes": [
    {
      "id": "0-recepo",
      "name": "Recepção",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.7854039213444359,
          "pitch": -0.0032392686026199158,
          "rotation": 6.283185307179586,
          "target": "2-corredor-1"
        },
        {
          "yaw": 0.7008823506396844,
          "pitch": -0.0020073717007704772,
          "rotation": 4.71238898038469,
          "target": "1-sala-de-reunio"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-sala-de-reunio",
      "name": "Sala de Reunião",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.8103384702849112,
          "pitch": 0.06514158347033572,
          "rotation": 0,
          "target": "2-corredor-1"
        },
        {
          "yaw": -2.3561711713012716,
          "pitch": 0.023009967313420532,
          "rotation": 0,
          "target": "0-recepo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-corredor-1",
      "name": "Corredor 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0683347699145536,
          "pitch": 0.07615049536686591,
          "rotation": 0,
          "target": "1-sala-de-reunio"
        },
        {
          "yaw": 0.2937637625601415,
          "pitch": 0.09125372806410326,
          "rotation": 1.5707963267948966,
          "target": "3-sala-1-"
        },
        {
          "yaw": 0.007917657229935315,
          "pitch": 0.020343194655909613,
          "rotation": 0,
          "target": "4-corredor-2"
        },
        {
          "yaw": 2.888857433489208,
          "pitch": 0.07561861957822025,
          "rotation": 4.71238898038469,
          "target": "0-recepo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-sala-1-",
      "name": "Sala 1 ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.2405227366699787,
          "pitch": 0.0024256452423259134,
          "rotation": 0,
          "target": "2-corredor-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-corredor-2",
      "name": "Corredor 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.1377244267481217,
          "pitch": 0.029995182228285344,
          "rotation": 0,
          "target": "2-corredor-1"
        },
        {
          "yaw": 0.027399701334147153,
          "pitch": -0.01699834678668566,
          "rotation": 0,
          "target": "5-sala-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-sala-2",
      "name": "Sala 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.804887041113119,
          "pitch": 0.022329319335788966,
          "rotation": 10.995574287564278,
          "target": "6-sala-3"
        },
        {
          "yaw": -2.572830330159384,
          "pitch": 0.025502310919948812,
          "rotation": 18.06415775814132,
          "target": "4-corredor-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-sala-3",
      "name": "Sala 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.5954754562292344,
          "pitch": 0.008475479235379169,
          "rotation": 4.71238898038469,
          "target": "7-descanso"
        },
        {
          "yaw": 2.6257743630921304,
          "pitch": 0.022617760749499283,
          "rotation": 1.5707963267948966,
          "target": "5-sala-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-descanso",
      "name": "Descanso",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": 1.5899953982918849,
        "pitch": 0.008588994307338282,
        "fov": 1.3474042771833745
      },
      "linkHotspots": [
        {
          "yaw": -1.7459700243389236,
          "pitch": 0.03183163772721187,
          "rotation": 0,
          "target": "6-sala-3"
        },
        {
          "yaw": 1.4499959051739157,
          "pitch": -0.03874812715193876,
          "rotation": 4.71238898038469,
          "target": "8-copa"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-copa",
      "name": "Copa",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.188104446885891,
          "pitch": 0.05103385632596513,
          "rotation": 0,
          "target": "7-descanso"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Adit",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
