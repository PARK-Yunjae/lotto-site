import urllib.request
import json

def get_all_winning_numbers(start=1, end=1111):
    all_numbers = []
    for i in range(start, end + 1):
        url = f"https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo={i}"
        try:
            with urllib.request.urlopen(url) as response:
                data = json.loads(response.read().decode("utf-8"))
                if data.get("returnValue") == "success":
                    nums = [
                        data["drwtNo1"], data["drwtNo2"], data["drwtNo3"],
                        data["drwtNo4"], data["drwtNo5"], data["drwtNo6"]
                    ]
                    all_numbers.append(nums)
        except:
            break  # 회차가 존재하지 않으면 중단
    return all_numbers

# 최신 회차 자동으로 감지되게 끝까지 수집
winning_data = get_all_winning_numbers(1, 1111)  # 보수적으로 1111회까지 시도
save_path = "/mnt/data/lotto_all.json"
with open(save_path, "w", encoding="utf-8") as f:
    json.dump(winning_data, f, ensure_ascii=False, indent=2)

save_path