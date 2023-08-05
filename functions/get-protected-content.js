exports.handler = async (event) => {
    const { type } = JSON.parse(event.body);
  
    const content = {
        Free: {
          content: '<iframe id="freeIframe" src="https://droppr.xyz" frameborder="0" style="position: relative; width: 100%; height: 100%; z-index: 5;"></iframe>',
        },
        Pro: {
          content: '<iframe id="standardIframe" src="https://studiobloom.github.io/droppr.buildr/buildr" frameborder="0" style="position: relative; width: 100%; height: 100%; z-index: 5;"></iframe>',
        },
        Standard: {
          content: '<iframe id="proIframe" src="https://studiobloom.github.io/droppr.buildr/buildr" frameborder="0" style="position: relative; width: 100%; height: 100%; z-index: 5;"></iframe>',
        },
      };
    return {
      statusCode: 200,
      body: JSON.stringify({ src: content[type] }),
    };
  };
  
  