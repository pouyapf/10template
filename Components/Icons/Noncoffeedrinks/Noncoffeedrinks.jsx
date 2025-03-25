import React from 'react'

function Noncoffeedrinks({color,size}) {
  return (
    <svg width={size} height={size} viewBox="0 0 ${size} ${size}" fill="none" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
    <mask id="mask0_307_922" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width={size} height={size}>
    <rect width={size} height={size} fill="url(#pattern0_307_922)"/>
    </mask>
    <g mask="url(#mask0_307_922)">
    <rect width={size} height={size} fill={color}/>
    </g>
    <defs>
    <pattern id="pattern0_307_922" patternContentUnits="objectBoundingBox" width="1" height="1">
    <use href="#image0_307_922" transform="scale(0.00195312)"/>
    </pattern>
    <image id="image0_307_922" width="512" height="512" preserveAspectRatio="none" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAMAAADDpiTIAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAwBQTFRF////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACyO34QAAAP90Uk5TAAECAwQFBgcICQoLDA0ODxAREhMUFRYXGBkaGxwdHh8gISIjJCUmJygpKissLS4vMDEyMzQ1Njc4OTo7PD0+P0BBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWltcXV5fYGFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6e3x9fn+AgYKDhIWGh4iJiouMjY6PkJGSk5SVlpeYmZqbnJ2en6ChoqOkpaanqKmqq6ytrq+wsbKztLW2t7i5uru8vb6/wMHCw8TFxsfIycrLzM3Oz9DR0tPU1dbX2Nna29zd3t/g4eLj5OXm5+jp6uvs7e7v8PHy8/T19vf4+fr7/P3+6wjZNQAAEatJREFUeNrtnXuMnFUZh2dmZ7v37qXb2RkKkipFLNYWxISaoEFIaog2gomIErwgl2pqMVL8wyCkGgsEtIKRAqameIEYEyRKMBATi21INViuxQoCTRpmp+3uTi97v4xrCHTbnumc7zIz73vO8/sHdrqbzHzn+Z73nPc73zephM857epNO4ZLFTLx3OZvLHH2EKR8Hv/r9/x63cdbK/1W4/k3PLR7QyMAuJZFf3mg3fZ307fu/DAAuJW2v60K8uvn7TgDAJzKnWcF+/35W5IA4FAu/Wbgv1gDAA5lY/DzeWMKAJxJ8/LgfzP/QwDgTJaHWdZdAADO5IIEAHgNwFk1+yMAEJlkzf4IAAgAEAAgAEAAgAAAAQACAAQAxKWwZk5eAADvUtw8J28BAAEAAgAEAAgAEAAgAEAAgAAAAQACAAQACAAQACAAQACAAAABAAIABAAIABAAIABAAIAAAAEAAgAEAAgAEAAgAEAAgAAAAQACAAQACAAQACAAQACAAAABAAIABAAIABAAIABAAIAAAAEAAgAEAAgAEAAgAEAAgAAAAQACAAQACAAQACAAQACAAAABAAIABAAIABAAIABAAIAAQNnMO2dO2gGgWmnqEpAmwxtb/OqcXGL4hXQ93pVbACxZt/Xl4SEBuTHMu7+k2u9q+OWt65Y4DEDqlpc2XXNuA8WmXBrOvWbTS+tTrgKwZPudTQxyxQp51/YlbgLQ8fRKhtcmK5/ucBKAe85kbO1y5j0uArDqOkbWNtetchCA2xlXiQerZgCkVzCs9lmRdg6Apc0Mq32alzoHwPmMqsjDVTMAWALIPFw1AyDJoIo8XFwN9DwAAAAEAAgAEAAgAEAAgABArXLgcjKbA94CMPJHMpsRSgABAAIABAAIABAAIABAAIAAAAEAAgAEAAgAEAAgjgHQ9kUymzZvAeh9hMymlxJAAIAAAAEAAgAEAAgAEAAgTgFQ4liLPFw1A2AvgyrycNUMgH8xqCIPV80A2D3GqNpnbLdzAEw9z7Da5/kp91YBtzGsEg9W7QB4ajPjapvNT7nYB1j/BiNrlzfWJ1wE4Oil2xhbm2y79KiTACTevPjbIwxvpYysu/jNhJsAJEr3LV2z5cVpBrlcpl/csmbpvTVtmtb4WsDezdcub+t+Lz2m1c7d3c7mbtP6uOfYv7ctv3ZzjVumdbgYNF58L0MFw793FZ1Nl+HjFoaO/ft47UejzlcD+w2vZd1VfNbyEAAAAHgCQN7wWs5dAHKWh8BvA/Q5++0yyT4MYIF/utdVAHrTGMAGf2cnAdkEBrDB39lJQC6BATAABqj46f0ygN8AjB7y3QCHRr0GwK9OkMA+UN0B8KoTJLAPhAEwAAbAAMIMML/FzfFvmY8B7E6AnD8CwAC2tdLRKYD3BgAASgAlwGcABib9NsDkgOcAlAp+G6BQ8hwAnzpBEvtA9Qcg77cB8gkMgAEA4IRknHx2WSoDAJYOdHNbqMQtoUIN4GYNENkHkmkAN2eBIvtAGAADSATAHwMAwFjRZwMUx7wHwHgOeGOAugtAAAB5nw2QBwB/WoFZDGBtAG9KAAYwnwQdre6Nf2sHBrA2gIsKkNkHEmoAFycBMvtAUgHwxQAAUMaCvhiAEpBIDE76C8DkIAAkSp60Ao2NwBIAeNMJktkHkgBA3l8D5AEAAwCAH9tCZW4JFVsCGha6BsDCBkpAAAO4NwkQ2geSagD3JgFC+0BiDeAHABiAEgAAifEhXw0wNA4A5c4DLwwgQAAiAMj7aoA8AGAAAMAAGMDwWnubW+Pf1o4BAhnAtRogdEuoXAO4VgOk9oHkAlDBAIvObtVvAAA4hQlPYYDkhT/atW/P8OALN83TbQBKwDsZnAhkgLY/PPv9FbP/7f7IT/99VVKxASYGAaC8CssaYPGzVxz7/989rNgAEiqAPgDe/89lc3+8ej0A6AcgyLbQHy84/uc7Pq22BOQBILgBPvaFEz/AgxjASQNkGoy/eudJs74zzlMw/g0ZDBDQACnjttD0J09+7TMKAFiYwgABATBPAk5L6QRAbB9IbgkwTwJON7x2noJegNg+kDYDLDK81tiNAVwEwHjSmG4lT/QpNQAAvBtjT9R4zAoOAWDsgPsJgH0nqGB9eskvASKmAEIA6PfRAP0AcMpjYTTA8LBOAHIAELgEmMVecMcAlIBTnwxtHe4A0NGGAQIbwH4S0KdSABggVCOg3x0AMECFkyHnjgFyGCAuA5gAmNeFAZQDYLxP2qFOkOmjGO+K9xUA1ztBcvtAkgHIuQNADgBCzAIdN0AeAMKUgCOjlABfDGB8tKLxuEl/qqTxsZcYoNKwGh+uaqwBReEAZFIYIEwjwDgL3Gf5mvQ5IABU9qFxEvBXhQAIvhSgzwBPGl57CwOoB6Bke+Ls3X3SS8/sUmiAEgDMjfHbk8z3h2466VCKv0HY9EGM35XlLwAB9gQ99NsTXvj9PzS2AYRMAcQAEOAG4RuOLwLb1yY0AtAPABWPR5lHBAyv+tOcnx781AHxAOQAIMYSMLvqW33Fuwu/l6+/YTKh0gCUgMonROv8cr/92NmfWLd155/XLl72kPzhT8xvxQChDHCKjR6jf7/3qxd+9udvJTREch9ItAFceVys5D6QVgOoCgYIawCXAcAAx6c45lcJGCsCQOUzwmEDSBGAbAAcNgAA2EyKHDZAHgAwAABUOiV60y6Mf7oXA4Q0QDLjAgCZJAYI2whwogaIbgTKLgFuzAJFNwIxAAYQkkLJJwOUCgBwQiYHfDLAwCQA2FRFZw0gZgogCIB+nwzQDwBWx8RZAwAAJQAALE6Klk7949/ZggFCG8AFBcjuAwk3gAuzQNl9IAyAATAABhCRQ6P+GGD0EAB40wiQ3QaQDoCjJQAAbCdGjhogDwAYAABsTosFjdrHv3EBBohggGSfdgD6khggggH0TwKE94GkG8BRADCA9VFRPwvMAYBtQmwLPf9737nyovepM4CcLaGiAJg6GMwAKx7Y99wdP3n0mb2PLlZmgINTAGA7NSpvgC8/e/2id/7vylfvblVlAEFzQFEABOkEpe76TfN7PzR99+GkJgP0A0BkA/zg+CdEf/5WDOCmAcoAkLv5hBduX60IAAxgD0Cz+WthN5z4fezJW2SOf1czAEQqAWYFnPG1k15auUCNACgBAQxgngWeffI3yqUuUzMHxACRDXC64bXLMIA/BjAB8AEMoB2AwyO2p5Dp2UF9agwwchgA7BVgPIWKagCQ3geSD4D1d4g3ddEG0A6Ag18iL70RqLQE6AGAEhDVAD2NtodQIgCNPRggogGSWc0GyCYxQEQDGKvoES33EYrvA8k3gP0kQKIBxPeBFACQ1QxAFgCCpDDjAwAzBQAok2nrbaH9ikvAwWkACDILdM4AouaAwgCI1Alq7tRhgH4AqI4BJCoAA0Q3gHMAYIBgADR16wWguwkAIpcA+zoqD4Cc9YcEgPLjatLo4TEVAMjvA2kwgPUkIKsDAAwQ0ACKLwbkMECwHBmOYgAdJWD4CAAEU4BjBpAlAA0AWM+kdBgAAILOAq0N0NKhwQB5AIjDAAXrSTcG0G6Annm2AEirAfN6MEAc60C120IV9IE0GMAxADBAYAOYplLFcQUA5DBA1UqAikYAJSBw9s9EWQdmFRhgZj8AnCLTB1w3wIFpAAg6C3QKAGFzQHEAOHUxQMGlAL0GMB3I1nYM4KIB1G4LzWKAWAxg7KgquBhg7GFjgBCNgJxOA2joA+kAQGkvOAsA8ZQA46k0NKHTAJSAmAygYB2IAULk6FG3ATB+PgCocIYovRigoQ8kD4C82wbIA0A1DdCHAZwEwNoAbW3SDQAAYUqA/V3WkhRgvK+dEhDbOlB8J0jFKlCHAewByEoHAAOEMoDKiwE5DFBVAwxNaiwBGKBSjHvmTCdTab9CAxj3PALA3MxYbwvtV2iAAzMAEKYGqOwEKbg1WCQAkTpB0lcB/QAQygAqLwZkMUB8BkhaAtDeKuZzJDFAfAZotN4WKkcBxm+7wgDhDKDxaaE6+kBaAFB4MSALAPGVAPtecFa2ASgBMRpgcAoDuAiA8UmaCnvBprdsfBIqANisA/U1AnSsAiUCkHcXgDwAhDSAwu+Oy2GAepSArGgDAEDYEtDVbAlAR4uQT9HcRQmo9jpQdCdIySpQiwH07QpU0gfCABhAhwGsp1SiAcAANjlouy10YErwMsC4JfQgAFjE+DBV07iWDigzwP4ZAAhbA9RtC9WxJVQmAE5cDFDSB8IAGECHATJJy18UAkAygwFiNUDjAksDdDaL+AwLGjFArAbQ1gpUsiVUEQDKWoFZAIi3BDhhAEoABgAAi4wctjyljE1juQY4PAIA4RVgOqXsnyUgwgASBSATAAc6QVr6QLoNIBgADAAAABBrCehs0QRASycloBbrQNMvdjWxCnTRAPadoIzQOSAGiN8AYu8QxwB1NEAfBtAOwMGpKAboE2qAqYMAYJmS7V1/xgdvSgWgUAKAKJMAk1VnpO4LVnJrsCoAVHWCsgAQ+yxQ1XfHqbkUoMgAmZQeA6QyGCB2A6R79QDQm8YAsRvAeh3YPU/kFAADRDSA/cQqIxMADBDRAIpagTkMUMcSIGAZQAmImNFD7hng0CgARFOAol6wnj6QVABsO0HTA2oMkAeAKhhA6A3CGKBWBhDaCcIA1TBAR6slAHVfBbR2YIB6rgPrbgBFq0BNJcB6HdjdKLACUAJqZ4BkBgN4YwCRTwvFAJEzMBnBAHUHwPRGJwcAIECM20LVfHec8Y2WACDqJMDYCy4pMYDQKYB6AKYGAMBJAFS3AhU1AlUZwLgtVODFAEVbQnUZoGGhDgMsbMAAVTGA9TqwzqsATX0gVQawXgf2pMVNATBALQ1Q514wBqgWAEp2BeYAIHrGilHW133iDFAcA4DoClByMUBTH0guALadoP0lccsATX0g/QaYGsQAXhtAYCcIA1TLAO1tGgBoa8cAtVwHirsYoGoVqKsE6NgXrOjecHUGsAWgNy0NAAwQiwFsW4HJhdJKAAYImkG120KNW0IHASBgSv0RDFBXAIwz1RIAxDEJUHExQFUfSBkAxl6wCgMAQCyzQOvy2irMAHkAiMUAxt12BVkH3LhzEQPEYwDjwX3F8Nq++r1vVVtCtRnAqNcnZQGgqw+kzADGCZYBgMHXZc0BMUA1DZB/7qSXfjiCAdwEwHh6fWvihBfe+IWwVSAAhMj4kO3ptfPm438u3TwhbBU4NA4A8SjAeHol7nt47k9HLn8sIcwAcgUgGQDbTtBsvvKlY82A/658vK5vW1cfSJsBym33feScn/3n/9dbRh6/7qOvJMQBgAHiMkCu3C8Xb/pg50VfX7Xgc788VOe3ncMAVTSAccPlu7V/+6+eqv/9N8aNqxggLgOUV4CUKOsDaTOAiC8FDDwFwADxAaDTAAAQWwnQaQBKQJgMTrgCwMQgAMRVA1SWAMEVQB0AKg0AAPFNAlQaIA8AGAAA4gHAuONOUJRtCdVXAlIZ2QAYH2dLCYjPANJrgLZGoDoDSJ8FarsUgAEwgDIANBoAAMLF2EFVaIDBCQCITwEKDSBZALIByLthgDwAYAAAwAAAEIsBjF/NLibGr7jHAHEaQHYNUNcH0mcA2TVAXR9IIQD6DAAAsZYAfQagBISN8a5qdQYw3ucOAKFrgDoDiK4AAAAA2iYB6kpAHgAwAADEB0BvWu77TfcCQNVLgORtoeq2hGo0gORJgL4+kEIDSJ4E6OsDaTSANgAwQAQASvpLQAkAwmdyUL8BjN9+BQARaoAyA8gWgHQATBOoZTeKzTJ1c0CNBlhyv9gswQC1WAfqCgaIfR2oKxgAAwAABgAAAAAASgAABE1xTPv4jxUBwOsaIP0DAAAAiM7b2gF4GwAiZYd2AHYAQKQ8oR2AJwAgUva8rnv8X98DANGyVTcA4t++eAA2btM8/ts2AkDETF+1X+/4779qGgCiJr/6Na3j/9pq+a1s+QAkdi7bMKFx+Cc2LNuZAIAYMn7b0rVbdqmCYGLXlrVLbxtX8E7/B/uUcsJxPXeOAAAAAElFTkSuQmCC"/>
    </defs>
    </svg>
    
  )
}

export default Noncoffeedrinks